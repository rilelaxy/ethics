let currentSection = 1;

function showNextSection() {
  const currentSectionElement = document.getElementById(`section${currentSection}`);
  currentSectionElement.style.display = 'none';

  currentSection++;
  const nextSectionElement = document.getElementById(`section${currentSection}`);
  
  if (nextSectionElement) {
    nextSectionElement.style.display = 'block';
  } else {
    alert("You've reached the end of the presentation.");
  }
}
