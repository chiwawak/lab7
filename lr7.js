/*DOM (Document Object Model — об'єктна модель документа) — це спосіб, яким браузер бачить HTML-сторінку для JavaScript.
Для браузера HTML-файл — це не просто суцільний текст із тегами, а дерево об'єктів (вузлів). Кожен тег (<body>, <div>
, <input>, <span>) перетворюється на окремий JS-об'єкт, у якого є свої властивості (текст, стилі, розміри) та методи 
    (дії, які з ним можна зробити). Головний корінь усього цього дерева — глобальний об'єкт document.*/
    // Шлях до зображення магічної кулі
const ballImageUrl = 'magicball.png';

// Метод Object.assign() — копіює всі властивості з об'єкта стилів у властивість document.body.style
// Налаштовуємо фон сторінки та центруємо контент по вертикалі й горизонталі через Flexbox
Object.assign(document.body.style, {
    margin: '0',
    padding: '0',
    backgroundColor: '#050814',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    overflow: 'hidden'
});

// Метод document.createElement() — створює новий HTML-елемент <div> (головна рамка)
const frame = document.createElement('div');

// Метод Object.assign() — застосовує набір CSS-стилів (розміри, градієнтна рамка, тінь) до контейнера frame
Object.assign(frame.style, {
    width: '500px',
    maxWidth: '90vw',
    padding: '35px 25px 45px',
    backgroundColor: '#0a0e21',
    border: '2px solid transparent',
    borderImage: 'linear-gradient(135deg, #2b5876, #84fab0, #8fd3f4, #a18cd1) 1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '35px',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)'
});

// Метод document.createElement() — створює поле вводу <input> для запитання користувача
const questionInput = document.createElement('input');
// Властивості .type та .placeholder — задають текстовий тип поля та текст-підказку всередині нього
questionInput.type = 'text';
questionInput.placeholder = 'Введіть ваше питання...';

// Метод Object.assign() — стилізує поле вводу (заокруглені краї, кольори, шрифт, плавна анімація тіні)
Object.assign(questionInput.style, {
    width: '85%',
    padding: '12px 24px',
    borderRadius: '30px',
    border: 'none',
    outline: 'none',
    backgroundColor: '#f2e8ff',
    color: '#111111',
    fontSize: '18px',
    fontWeight: '500',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(242, 232, 255, 0.2)',
    transition: 'box-shadow 0.2s ease'
});

// Користувацька функція-обробник отримання фокусу (посилює світіння поля вводу)
function handleInputFocus() {
    questionInput.style.boxShadow = '0 0 20px rgba(242, 232, 255, 0.6)';
}

// Користувацька функція-обробник втрати фокусу (повертає стандартну тінь поля)
function handleInputBlur() {
    questionInput.style.boxShadow = '0 4px 15px rgba(242, 232, 255, 0.2)';
}

// Метод EventTarget.addEventListener() — відстежує події 'focus' (клік у поле) та 'blur' (вихід із поля)
questionInput.addEventListener('focus', handleInputFocus);
questionInput.addEventListener('blur', handleInputBlur); 

// Метод document.createElement() — створює круглий блок <div> для самої магічної кулі
const magicBall = document.createElement('div');

// Метод Object.assign() — робить блок круглим (borderRadius: 50%), підставляє фонове зображення кулі та додає світіння
Object.assign(magicBall.style, {
    position: 'relative',
    width: '360px',
    height: '360px',
    maxWidth: '75vw',
    maxHeight: '75vw',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    backgroundImage: `url("${ballImageUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxShadow: '0 0 35px rgba(175, 115, 255, 0.45)',
    transition: 'transform 0.15s ease'
});

// Метод document.createElement() — створює текстовий елемент <span> для відображення передбачення
const answerText = document.createElement('span');
// Властивість .textContent — встановлює початковий текст усередині кулі
answerText.textContent = 'Ask the ball!';

// Метод Object.assign() — оформлює текст відповіді (білий колір, неонове фіолетове світіння та контур)
Object.assign(answerText.style, {
    position: 'relative',
    zIndex: '2',
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textShadow: `
        0 0 8px #8e2de2,
        0 0 16px #4a00e0,
        -1px -1px 0 #5b1b82,  
         1px -1px 0 #5b1b82,
        -1px  1px 0 #5b1b82,
         1px  1px 0 #5b1b82
    `,
    transition: 'opacity 0.25s ease, transform 0.25s ease'
});

// Метод Node.appendChild() — вкладає текстовий елемент answerText усередину контейнера magicBall
magicBall.appendChild(answerText);

// Масив можливих варіантів відповідей магічної кулі
const answers = [
    'Yes', 'No', 'Maybe', 'Definitely', 
    'Ask again', 'Unlikely', '100%', 'Doubtful'
];

// Користувацька функція для генерації та плавного показу нової відповіді
function showNewAnswer() {
    // Метод Math.random() — генерує випадкове дробове число від 0 до 0.999...
    // Метод Math.floor() — округлює результат вниз до цілого індексу масиву (від 0 до 7)
    const randomIndex = Math.floor(Math.random() * answers.length);
    
    // Властивість .textContent — оновлює текст на випадково обрану відповідь із масиву
    answerText.textContent = answers[randomIndex];
    
    // Повертаємо кулі початковий масштаб, а тексту — повну видимість (opacity: 1)
    magicBall.style.transform = 'scale(1)';
    answerText.style.opacity = '1';
    answerText.style.transform = 'scale(1)';
}

// Користувацька функція-обробник натискання на кулю (запускає анімацію "струшування")
function shakeAndPredict() {
    // Метод String.prototype.trim() — обрізає пробіли; перевіряємо, чи ввів користувач текст питання
    if (!questionInput.value.trim()) {
        // Метод HTMLElement.focus() — автоматично ставить курсор у поле вводу, якщо воно порожнє
        questionInput.focus();
        return;
    }

    // Імітуємо натискання: трохи зменшуємо кулю і ховаємо попередній текст
    magicBall.style.transform = 'scale(0.95)';
    answerText.style.opacity = '0';
    answerText.style.transform = 'scale(0.8)';

    // Метод window.setTimeout() — викликає функцію showNewAnswer із затримкою 250 мс (коли старий текст зникне)
    setTimeout(showNewAnswer, 250);
}

// Користувацька функція-обробник натискання клавіш у полі вводу
function handleKeyPress(e) {
    // Властивість e.key — перевіряє, чи була натиснута саме клавіша 'Enter'
    if (e.key === 'Enter') {
        shakeAndPredict();
    }
}

// Метод EventTarget.addEventListener() — прив'язує клік по кулі та натискання клавіші до відповідних функцій
magicBall.addEventListener('click', shakeAndPredict);
questionInput.addEventListener('keydown', handleKeyPress);

// Метод Node.appendChild() — фінальна збірка сторінки: додаємо поле вводу та кулю в рамку, а рамку — у <body>
frame.appendChild(questionInput);
frame.appendChild(magicBall);
document.body.appendChild(frame);