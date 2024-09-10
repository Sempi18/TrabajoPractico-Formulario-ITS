document.addEventListener("DOMContentLoaded", () => {
  const jsonUrl = "../options.json";

  const loadOptions = async () => {
    try {
      const response = await fetch(jsonUrl);
      const data = await response.json();

      const select = document.getElementById("options");
      data.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option.value;
        optionElement.textContent = option.label;
        select.appendChild(optionElement);
      });
    } catch (error) {
      console.error("Error al cargar los horarios:", error);
    }
  };

  loadOptions();

  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log(data);
  });
});
