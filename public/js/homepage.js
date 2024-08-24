document.addEventListener('DOMContentLoaded', () => {
    // Open modals
    const accountSettingsBtn = document.getElementById('account-settings');
    const goalSettingsBtn = document.getElementById('goal-settings');
    const accountSettingsModal = document.getElementById('account-settings-modal');
    const goalSettingsModal = document.getElementById('goal-settings-modal');

    accountSettingsBtn.addEventListener('click', () => {
        accountSettingsModal.classList.add('is-active');
    });

    goalSettingsBtn.addEventListener('click', () => {
        goalSettingsModal.classList.add('is-active');
    });

    // Close modals
    document.querySelectorAll('.modal .delete').forEach(button => {
        button.addEventListener('click', () => {
            const modals = document.querySelectorAll('.modal.is-active');
            modals.forEach(modal => modal.classList.remove('is-active'));
        });
    });

    // Handle change password
    document.getElementById('change-password-btn').addEventListener('click', () => {
        const newPassword = document.getElementById('new-password').value;
        const verifyPassword = document.getElementById('verify-password').value;
        if (newPassword === verifyPassword) {
            alert('Your password has been changed successfully!');
            accountSettingsModal.classList.remove('is-active');
        } else {
            alert('Passwords do not match. Please try again.');
        }
    });

    // Add food items to the page
    const foodSections = {
        breakfast: document.getElementById('breakfast-section'),
        lunch: document.getElementById('lunch-section'),
        dinner: document.getElementById('dinner-section')
    };

    function addFoodToSection(name, protein, fat, carbs) {
        const section = foodSections[mealType];
        if (section) {
            const tableBody = section.querySelector('tbody');
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${protein}</td>
                <td>${fat}</td>
                <td>${carbs}</td>
                <td><button class="button is-primary is-small select-food ">Change Amount</button></td>
            `;
            tableBody.appendChild(row);
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const mealType = urlParams.get('meal') || 'breakfast';
    const foodParams = urlParams.entries();

    for (const [key, value] of foodParams) {
        const match = key.match(/name(\d+)/);
        if (match) {
            const index = match[1];
            const name = urlParams.get(`name${index}`);
            const protein = urlParams.get(`protein${index}`);
            const fat = urlParams.get(`fat${index}`);
            const carbs = urlParams.get(`carbs${index}`);
            addFoodToSection(name, protein, fat, carbs);
        }
    }

    // Handle food amount change
    const amountModal = document.getElementById('amount-modal');
    const foodAmountInput = document.getElementById('food-amount');
    const submitAmountButton = document.getElementById('submit-amount');
    
    let selectedFood = {};

    function handleButtonClick(event) {
        const button = event.target;
        const foodItem = button.closest('tr');

        // Get food data
        const name = foodItem.children[0].textContent;
        const protein = parseFloat(foodItem.children[1].textContent);
        const fat = parseFloat(foodItem.children[2].textContent);
        const carbs = parseFloat(foodItem.children[3].textContent);

        selectedFood = { name, protein, fat, carbs, foodItem };

        // Set data in modal
        document.getElementById('modal-food-name').value = name;
        document.getElementById('modal-food-protein').value = protein;
        document.getElementById('modal-food-fat').value = fat;
        document.getElementById('modal-food-carbs').value = carbs;

        // Show modal
        amountModal.classList.add('is-active');
    }

    document.querySelectorAll('.food-container .select-food').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    submitAmountButton.addEventListener('click', () => {
        const amount = parseFloat(foodAmountInput.value);
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const totalProtein = (selectedFood.protein * amount / 100).toFixed(1);
        const totalFat = (selectedFood.fat * amount / 100).toFixed(1);
        const totalCarbs = (selectedFood.carbs * amount / 100).toFixed(1);

        // Update the food item with new values
        updateFoodItem(selectedFood.foodItem, totalProtein, totalFat, totalCarbs);

        // Hide modal
        amountModal.classList.remove('is-active');
    });

    function updateFoodItem(foodItem, protein, fat, carbs) {
        foodItem.children[1].textContent = protein;
        foodItem.children[2].textContent = fat;
        foodItem.children[3].textContent = carbs;
    }
});