function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}

function toggleNav() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
function submitForm() {
    showPopup();
}

function showPopup() {
    document.getElementById('successPopup').style.display = 'block';
}

function hidePopup() {
    document.getElementById('successPopup').style.display = 'none';
}
function calculateCost() {
    var graphicDesignHours = parseFloat(document.getElementById('graphicDesign').value) || 0;
    var projectManagementHours = parseFloat(document.getElementById('projectManagement').value) || 0;
    var programmingHours = parseFloat(document.getElementById('programming').value) || 0;

    var hourlyRates = {
        graphicDesign: 25,
        projectManagement: 20,
        programming: 35
    };

    var totalCost = (graphicDesignHours * hourlyRates.graphicDesign) +
                    (projectManagementHours * hourlyRates.projectManagement) +
                    (programmingHours * hourlyRates.programming);

    document.getElementById('totalCost').innerHTML = 'Koszt za godzinę: <span>' + totalCost.toFixed(2) + ' PLN</span>';
}