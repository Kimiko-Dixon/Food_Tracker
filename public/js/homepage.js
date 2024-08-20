<script>
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/calories')
        .then(response => response.json())
        .then(data => {
            // Extract data
            const { calorieGoal, caloriesToday } = data;
            const caloriesLeft = calorieGoal - caloriesToday;

            // Update HTML elements
            document.getElementById('calorieGoal').textContent = `${calorieGoal} cal`;
            document.getElementById('caloriesToday').textContent = `${caloriesToday} cal`;
            document.getElementById('caloriesLeft').textContent = `${caloriesLeft} cal`;
        })
        .catch(error => {
            console.error('Error fetching calorie data:', error);
        });
});
</script>