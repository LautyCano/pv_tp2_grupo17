const paisSelect = document.getElementById('pais');
const capitalSelect = document.getElementById('capital');

const capitales = {
  argentina: "buenos_aires",
  brasil: "brasilia",
  canada: "ottawa",
  mexico: "cdmx",
  chile: "santiago",
  colombia: "bogota"
};

const nombresCapitales = {
  buenos_aires: "Buenos Aires",
  brasilia: "Brasilia",
  ottawa: "Ottawa",
  cdmx: "Ciudad de México",
  santiago: "Santiago",
  bogota: "Bogotá"
};

paisSelect.addEventListener('change', () => {
  const paisSeleccionado = paisSelect.value;

  if (capitales[paisSeleccionado]) {
    capitalSelect.disabled = false;
    capitalSelect.value = capitales[paisSeleccionado];

    const nombrePais = paisSelect.options[paisSelect.selectedIndex].text;
    const nombreCapital = nombresCapitales[capitalSelect.value];

    console.log(`País seleccionado: ${nombrePais}`);
    console.log(`Capital correspondiente: ${nombreCapital}`);
  } else {
    capitalSelect.value = "";
    capitalSelect.disabled = true;
  }
});
