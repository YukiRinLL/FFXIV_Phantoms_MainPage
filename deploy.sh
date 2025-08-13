#!/bin/bash

# 设置远程仓库的名称，默认为 'origin'
REMOTE_NAME=${REMOTE_NAME:-origin}

# 确保脚本在仓库根目录下运行
if [ ! -d ".git" ]; then
  echo "Error: This script must be run from the root of the git repository."
  exit 1
fi

# 检查是否在 main 分支上
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [ "$current_branch" != "main" ]; then
  echo "Error: You must be on the 'main' branch to run this script."
  exit 1
fi

# 确保本地 main 分支是最新的
echo "Fetching latest changes from remote..."
git fetch $REMOTE_NAME

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "Error: You have uncommitted changes. Please commit or stash them before running this script."
  exit 1
fi

# 检查是否有新的远程更改
if [ "$(git rev-parse HEAD)" != "$(git rev-parse $REMOTE_NAME/main)" ]; then
  echo "Pulling latest changes from $REMOTE_NAME/main..."
  git pull $REMOTE_NAME main
fi

# 合并 main 分支到 none-25M-for-deployment 分支
echo "Merging main into none-25M-for-deployment..."
git checkout none-25M-for-deployment
git merge main

# 合并 main 分支到 redefine_url_new 分支
echo "Merging main into redefine_url_new..."
git checkout redefine_url_new
git merge main

# 合并 main 分支到 maoziyun 分支
echo "Merging main into maoziyun..."
git checkout maoziyun
git merge main

# 切换回 main 分支
git checkout main

# 推送所有分支到远程仓库
echo "Pushing all branches to remote..."
git push $REMOTE_NAME main
git push $REMOTE_NAME none-25M-for-deployment
git push $REMOTE_NAME redefine_url_new
git push $REMOTE_NAME maoziyun

echo "Deployment script completed successfully."