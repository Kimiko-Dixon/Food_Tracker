document.addEventListener('DOMContentLoaded', () => {
    const foodSearchInput = document.getElementById('food-search');
    const foodResultsDiv = document.getElementById('food-results');
    const selectedFoodsTableBody = document.getElementById('selected-foods');
    const submitButton = document.getElementById('submit-foods');
    const urlParams = new URLSearchParams(window.location.search);
    const mealType = urlParams.get('meal') || 'breakfast';

    app.use((req, res) => {
        res.status(404).render("404page", {title:"404 not found",
        customstyle: `<link rel="stylesheet" href="/css/foodPage.css">`});
      });

    // Sample data for demonstration
    const foodData = [
        { name: 'Apple', protein: 0.5, fat: 0.2, carbs: 14 },
        { name: 'Banana', protein: 1.3, fat: 0.3, carbs: 27 },
        { name: 'Chicken Breast', protein: 31, fat: 3.6, carbs: 0 },
        { name: 'Broccoli', protein: 2.8, fat: 0.4, carbs: 7 },
        // Add more food items here
    ];

    function displaySearchResults(query) {
        foodResultsDiv.innerHTML = ''; // Clear previous results
        const results = foodData.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
        results.forEach(food => {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            foodItem.innerHTML = `
                <p>${food.name}</p>
                <button class="button is-primary is-small select-food" data-name="${food.name}" data-protein="${food.protein}" data-fat="${food.fat}" data-carbs="${food.carbs}">Select</button>
            `;
            foodResultsDiv.appendChild(foodItem);
        });
    }

    function updateTotals() {
        let totalProtein = 0;
        let totalFat = 0;
        let totalCarbs = 0;

        const rows = selectedFoodsTableBody.querySelectorAll('tr:not(:last-child)');
        rows.forEach(row => {
            totalProtein += parseFloat(row.cells[1].textContent);
            totalFat += parseFloat(row.cells[2].textContent);
            totalCarbs += parseFloat(row.cells[3].textContent);
        });

        // Update the total row
        document.getElementById('total-protein').textContent = totalProtein.toFixed(1);
        document.getElementById('total-fat').textContent = totalFat.toFixed(1);
        document.getElementById('total-carbs').textContent = totalCarbs.toFixed(1);
    }

    function addFoodToTable(name, protein, fat, carbs) {
        const rows = selectedFoodsTableBody.querySelectorAll('tr');
        let alreadyExists = false;

        rows.forEach(row => {
            const foodName = row.cells[0].textContent;
            if (foodName === name) {
                alreadyExists = true;
                const proteinCell = row.cells[1];
                const fatCell = row.cells[2];
                const carbsCell = row.cells[3];

                proteinCell.textContent = (parseFloat(proteinCell.textContent) + parseFloat(protein)).toFixed(1);
                fatCell.textContent = (parseFloat(fatCell.textContent) + parseFloat(fat)).toFixed(1);
                carbsCell.textContent = (parseFloat(carbsCell.textContent) + parseFloat(carbs)).toFixed(1);
            }
        });

        if (!alreadyExists) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${protein}</td>
                <td>${fat}</td>
                <td>${carbs}</td>
            `;
            selectedFoodsTableBody.appendChild(row);
        }

        updateTotals();
    }

    foodSearchInput.addEventListener('input', (event) => {
        const query = event.target.value;
        if (query) {
            displaySearchResults(query);
        } else {
            foodResultsDiv.innerHTML = '';
        }
    });

    foodResultsDiv.addEventListener('click', (event) => {
        if (event.target.classList.contains('select-food')) {
            const button = event.target;
            const name = button.getAttribute('data-name');
            const protein = button.getAttribute('data-protein');
            const fat = button.getAttribute('data-fat');
            const carbs = button.getAttribute('data-carbs');

            addFoodToTable(name, protein, fat, carbs);

            foodResultsDiv.innerHTML = '';
        }
    });

    submitButton.addEventListener('click', () => {
        const rows = selectedFoodsTableBody.querySelectorAll('tr');
        let foodParams = [];
        rows.forEach((row, index) => {
            const cells = row.cells;
            const name = cells[0].textContent;
            const protein = cells[1].textContent;
            const fat = cells[2].textContent;
            const carbs = cells[3].textContent;
            foodParams.push(`name${index}=${encodeURIComponent(name)}`);
            foodParams.push(`protein${index}=${encodeURIComponent(protein)}`);
            foodParams.push(`fat${index}=${encodeURIComponent(fat)}`);
            foodParams.push(`carbs${index}=${encodeURIComponent(carbs)}`);
        });

        window.location.href = `homepage.html?meal=${mealType}&${foodParams.join('&')}`;
    });
});

console.log(foodParams);