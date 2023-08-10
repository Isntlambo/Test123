// Lógica para el sorteo
var participants = []; // Array para almacenar los participantes

// Obtener elementos del DOM
var participantInput = document.getElementById('participantInput');
var tableBody = document.getElementById('participantsBody');
var spinButton = document.getElementById('spin');
var winnerName = document.getElementById('winnerName');

// Asignar eventos a los botones
document.getElementById('add-participant').addEventListener('click', addParticipant);
spinButton.addEventListener('click', spin);

function addParticipant() {
  var participantName = participantInput.value.trim();
  
  if (participantName !== '') {
    participants.push(participantName);
    var row = tableBody.insertRow();
    var cell = row.insertCell();
    cell.textContent = participantName;
    
    participantInput.value = '';
  }
}

function spin() {
  // Si hay menos de tres participantes, mostrar un mensaje de error
  if (participants.length < 3) {
    alert('Debe haber al menos tres participantes para que el sorteo funcione.');
    return;
  }
  
  // Seleccionar al tercer participante como ganador
  var winner = participants[2];
  winnerName.textContent = winner;
}