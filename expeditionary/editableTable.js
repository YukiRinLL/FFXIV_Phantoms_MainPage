const config = {
    apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzaG1ic2F3d3JidXljbml2Y2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5Mjg2OTAsImV4cCI6MjA2OTUwNDY5MH0.fwRJD-WuST7mCbJf9h2i2Xk0z6mtCMCeV--JGUecC6A',
    prefer: 'return=minimal',
    baseUrl: 'https://dshmbsawwrbuycnivcjs.supabase.co/rest/v1'
};

// 生成UUID函数
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// 页面加载完成后获取数据
document.addEventListener('DOMContentLoaded', function() {
    fetchRows();

    // 添加表单提交事件
    document.getElementById('addRowForm').addEventListener('submit', function(event) {
        event.preventDefault();
        addRow();
    });

    // 编辑表单提交事件
    document.getElementById('editRowForm').addEventListener('submit', function(event) {
        event.preventDefault();
        updateRow();
    });
});

// 获取表格数据
function fetchRows() {
    fetch(`${config.baseUrl}/expeditionary_team?select=*`, {
        method: 'GET',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector('#myTable tbody');
            tableBody.innerHTML = '';

            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.dataset.uuid = row.uuid;

                // 格式化多选字段的显示
                const occupationDisplay = row.occupation ? row.occupation.split(',').map(item =>
                    `<span class="badge bg-secondary">${item.trim()}</span>`).join(' ') : '';

                const dungeonDisplay = row.volunteer_dungeon ? row.volunteer_dungeon.split(',').map(item =>
                    `<span class="badge bg-info text-dark">${item.trim()}</span>`).join(' ') : '';

                tr.innerHTML = `
                <td>${row.name || ''}</td>
                <td>${row.free_start_time || ''}</td>
                <td>${row.free_end_time || ''}</td>
                <td>${occupationDisplay}</td>
                <td>${dungeonDisplay}</td>
                <td>${row.level || ''}</td>
                <td>${row.guild_name || ''}</td>
                <td>${row.notes || ''}</td>
                <td>${row.online_status ? '<span class="badge bg-success">在线</span>' : '<span class="badge bg-secondary">离线</span>'}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="openEditModal('${row.uuid}')">编辑</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteRow('${row.uuid}')">删除</button>
                </td>
            `;
                tableBody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            showMessage('获取数据失败: ' + error.message, 'error');
        });
}

// 显示消息
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;

    // 5秒后清除消息
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 5000);
}

// 打开新增模态框
function openAddModal() {
    // 重置表单
    document.getElementById('addRowForm').reset();
    document.getElementById('addModal').style.display = 'block';
}

// 关闭新增模态框
function closeAddModal() {
    document.getElementById('addModal').style.display = 'none';
}

// 添加新行
function addRow() {
    const formData = new FormData(document.getElementById('addRowForm'));
    const newRow = {
        uuid: generateUUID(),
        name: formData.get('name'),
        free_start_time: formData.get('free_start_time'),
        free_end_time: formData.get('free_end_time'),
        occupation: Array.from(document.getElementById('occupation').selectedOptions)
            .map(option => option.value).join(', '),
        volunteer_dungeon: Array.from(document.getElementById('volunteer_dungeon').selectedOptions)
            .map(option => option.value).join(', '),
        level: formData.get('level'),
        guild_name: formData.get('guild_name'),
        notes: formData.get('notes'),
        online_status: document.getElementById('online_status').checked
    };

    fetch(`${config.baseUrl}/expeditionary_team`, {
        method: 'POST',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(newRow)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('添加记录失败');
        })
        .then(data => {
            closeAddModal();
            fetchRows();
            showMessage('记录添加成功!', 'success');
        })
        .catch(error => {
            console.error('Error adding row:', error);
            showMessage('添加记录失败: ' + error.message, 'error');
        });
}

// 打开编辑模态框
function openEditModal(uuid) {
    fetch(`${config.baseUrl}/expeditionary_team?uuid=eq.${uuid}`, {
        method: 'GET',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.length > 0) {
                const row = data[0];

                // 填充表单数据
                document.getElementById('edit_uuid').value = row.uuid;
                document.getElementById('edit_name').value = row.name || '';
                document.getElementById('edit_free_start_time').value = row.free_start_time || '';
                document.getElementById('edit_free_end_time').value = row.free_end_time || '';
                document.getElementById('edit_level').value = row.level || '';
                document.getElementById('edit_guild_name').value = row.guild_name || '';
                document.getElementById('edit_notes').value = row.notes || '';
                document.getElementById('edit_online_status').checked = row.online_status || false;

                // 处理多选字段
                if (row.occupation) {
                    const occupations = row.occupation.split(',').map(item => item.trim());
                    const occupationSelect = document.getElementById('edit_occupation');
                    Array.from(occupationSelect.options).forEach(option => {
                        option.selected = occupations.includes(option.value);
                    });
                }

                if (row.volunteer_dungeon) {
                    const dungeons = row.volunteer_dungeon.split(',').map(item => item.trim());
                    const dungeonSelect = document.getElementById('edit_volunteer_dungeon');
                    Array.from(dungeonSelect.options).forEach(option => {
                        option.selected = dungeons.includes(option.value);
                    });
                }

                document.getElementById('editModal').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching row data:', error);
            showMessage('获取记录数据失败: ' + error.message, 'error');
        });
}

// 关闭编辑模态框
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}

// 更新行
function updateRow() {
    const formData = new FormData(document.getElementById('editRowForm'));
    const uuid = formData.get('uuid');

    const updatedRow = {
        name: formData.get('name'),
        free_start_time: formData.get('free_start_time'),
        free_end_time: formData.get('free_end_time'),
        occupation: Array.from(document.getElementById('edit_occupation').selectedOptions)
            .map(option => option.value).join(', '),
        volunteer_dungeon: Array.from(document.getElementById('edit_volunteer_dungeon').selectedOptions)
            .map(option => option.value).join(', '),
        level: formData.get('level'),
        guild_name: formData.get('guild_name'),
        notes: formData.get('notes'),
        online_status: document.getElementById('edit_online_status').checked
    };

    fetch(`${config.baseUrl}/expeditionary_team?uuid=eq.${uuid}`, {
        method: 'PATCH',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedRow)
    })
        .then(response => {
            if (response.status === 204) {
                // 处理 204 状态码
                showMessage('更新成功，但没有返回内容', 'success');
                return null;
            } else
            if (response.ok) {
                return response.json();
            }
            throw new Error('更新记录失败');
        })
        .then(data => {
            closeEditModal();
            fetchRows();
            showMessage('记录更新成功!', 'success');
        })
        .catch(error => {
            console.error('Error updating row:', error);
            showMessage('更新记录失败: ' + error.message, 'error');
        });
}

// 删除行
function deleteRow(uuid) {
    if (!confirm('确定要删除这条记录吗?')) {
        return;
    }

    fetch(`${config.baseUrl}/expeditionary_team?uuid=eq.${uuid}`, {
        method: 'DELETE',
        headers: {
            'apikey': config.apiKey,
            'Authorization': config.authorization
        }
    })
        .then(response => {
            if (response.ok) {
                fetchRows();
                showMessage('记录删除成功!', 'success');
            } else {
                throw new Error('删除记录失败');
            }
        })
        .catch(error => {
            console.error('Error deleting row:', error);
            showMessage('删除记录失败: ' + error.message, 'error');
        });
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const addModal = document.getElementById('addModal');
    const editModal = document.getElementById('editModal');

    if (event.target === addModal) {
        closeAddModal();
    }
    if (event.target === editModal) {
        closeEditModal();
    }
};