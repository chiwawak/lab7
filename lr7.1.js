const ballImageUrl = 'magicball.png';

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

const frame = document.createElement('div');
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

const questionInput = document.createElement('input');
questionInput.type = 'text';
questionInput.placeholder = 'Введіть ваше питання...';
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

function handleInputFocus() {
    questionInput.style.boxShadow = '0 0 20px rgba(242, 232, 255, 0.6)';
}

function handleInputBlur() {
    questionInput.style.boxShadow = '0 4px 15px rgba(242, 232, 255, 0.2)';
}

questionInput.addEventListener('focus', handleInputFocus);
questionInput.addEventListener('blur', handleInputBlur);

const magicBall = document.createElement('div');
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

const answerText = document.createElement('span');
answerText.textContent = 'Ask the ball!';
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

magicBall.appendChild(answerText);

const answers = [
    'Yes', 'No', 'Maybe', 'Definitely',
    'Ask again', 'Unlikely', '100%', 'Doubtful'
];

function showNewAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerText.textContent = answers[randomIndex];

    magicBall.style.transform = 'scale(1)';
    answerText.style.opacity = '1';
    answerText.style.transform = 'scale(1)';
}

function shakeAndPredict() {
    if (!questionInput.value.trim()) {
        questionInput.focus();
        return;
    }

    magicBall.style.transform = 'scale(0.95)';
    answerText.style.opacity = '0';
    answerText.style.transform = 'scale(0.8)';

    setTimeout(showNewAnswer, 250);
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        shakeAndPredict();
    }
}

magicBall.addEventListener('click', shakeAndPredict);
questionInput.addEventListener('keydown', handleKeyPress);

frame.appendChild(questionInput);
frame.appendChild(magicBall);
document.body.appendChild(frame);