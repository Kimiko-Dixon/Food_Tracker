    document.addEventListener('DOMContentLoaded', () => {
        const accountSettingsBtn = document.getElementById('account-settings');
        const accountSettingsModal = document.getElementById('account-settings-modal');
        const goalSettingsBtn = document.getElementById('goal-settings');
        const goalSettingsModal = document.getElementById('goal-settings-modal');
        const changePasswordBtn = document.getElementById('change-password-btn');
        const deleteButtons = document.querySelectorAll('.delete');

        // Open Account Settings Modal
        accountSettingsBtn.addEventListener('click', () => {
            accountSettingsModal.classList.add('is-active');
        });

        // Open Goal Settings Modal
        goalSettingsBtn.addEventListener('click', () => {
            goalSettingsModal.classList.add('is-active');
        });

        // Close Modals
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                accountSettingsModal.classList.remove('is-active');
                goalSettingsModal.classList.remove('is-active');
            });
        });

        // Change Password Button
        changePasswordBtn.addEventListener('click', () => {
            const newPassword = document.getElementById('new-password').value;
            const verifyPassword = document.getElementById('verify-password').value;

            if (newPassword === verifyPassword) {
                alert('Your password has been changed successfully!');
                accountSettingsModal.classList.remove('is-active');
            } else {
                alert('Passwords do not match. Please try again.');
            }
        });
    });


    document.addEventListener('DOMContentLoaded', () => {
        // Fetch and display calorie goal
        fetch('/api/goals')
            .then(response => response.json())
            .then(data => {
                document.getElementById('calorieGoal').textContent = `${data.calorieGoal} cal`;
                document.getElementById('caloriesToday').textContent = `${data.caloriesToday} cal`;
                document.getElementById('caloriesLeft').textContent = `${data.caloriesLeft} cal`;
            });

        // Fetch and display foods in the tracker
        fetch('/api/foods')
            .then(response => response.json())
            .then(data => {
                const foodsTableBody = document.querySelector('.table.is-fullwidth.is-striped tbody');
                foodsTableBody.innerHTML = '';
                data.foods.forEach(food => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>${food.name}</td>
                        <td class="level-right"><a class="button is-small is-primary" href="#">Add</a></td>
                    `;
                    foodsTableBody.appendChild(row);
                });
            });

        // Fetch and display meals
        fetch('/api/meals')
            .then(response => response.json())
            .then(data => {
                const mealsTableBody = document.querySelector('.column.is-6 .table.is-fullwidth.is-striped tbody');
                mealsTableBody.innerHTML = ''; 
                data.meals.forEach((meal, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td width="5%"><i class="fa fa-bell-o"></i></td>
                        <td>Meal #${index + 1}</td>
                        <td class="level-right"><a class="button is-small is-primary" href="#">Delete</a></td>
                    `;
                    mealsTableBody.appendChild(row);
                });
            });

        // Fetch and display progress for macros
        fetch('/api/progress')
            .then(response => response.json())
            .then(data => {
                document.querySelector('progress[value="70"]').value = data.proteinProgress;
                document.querySelector('progress[value="80"]').value = data.fatProgress;
                document.querySelector('progress[value="30"]').value = data.carbsProgress;
            });
    });
