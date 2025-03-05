document.addEventListener('DOMContentLoaded', function () {
  const animals = [
    {
      name: 'Мурка',
      breed: 'Кіт',
      age: 2,
      image: 'https://via.placeholder.com/300x200',
      description: 'Мурка — дуже лагідний кіт, шукає новий дім.'
    },
    {
      name: 'Шерлок',
      breed: 'Пес',
      age: 3,
      image: 'https://via.placeholder.com/300x200',
      description: 'Шерлок — відданий пес, потребує активного власника.'
    },
    {
      name: 'Барсик',
      breed: 'Кіт',
      age: 4,
      image: 'https://via.placeholder.com/300x200',
      description: 'Барсик — спокійний і доброзичливий кіт, чудовий компаньйон.'
    }
  ];

  const animalsList = document.getElementById('animals-list');

  animals.forEach(animal => {
    const animalCard = document.createElement('div');
    animalCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-lg', 'transition', 'transform', 'hover:scale-105');

    animalCard.innerHTML = `
      <img src="${animal.image}" alt="${animal.name}" class="w-full h-48 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-semibold">${animal.name}</h3>
      <p class="text-xl text-gray-500">${animal.breed}, ${animal.age} роки</p>
      <p class="mt-2 text-gray-700">${animal.description}</p>
    `;

    animalsList.appendChild(animalCard);
  });
});
