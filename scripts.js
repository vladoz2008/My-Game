const rpoCategories = [
    {
        name: "Алгоритмы",
        questions: [
            { points: 100, question: "Как называется алгоритм, который делит массив пополам для поиска элемента?", answers: ["бинарный поиск", "двоичный поиск", "binary search", "bin search", "бинарный"] },
            { points: 200, question: "Какой алгоритм сортировки известен своей простотой, но имеет сложность O(n^2)?", answers: ["пузырьковая", "bubble sort", "bubble", "пузырьковая сортировка", "bubblesort"] },
            { points: 300, question: "Какой алгоритм используется для нахождения кратчайшего пути в графе?", answers: ["дейкстра", "dijkstra", "dijkstra's", "дейкстры", "dijkstra algo"] },
            { points: 400, question: "Как называется метод решения задач путем разбиения на подзадачи с сохранением результатов?", answers: ["динамическое", "dp", "dynamic", "динамическое программирование", "dynamic prog"] },
            { points: 500, question: "Как называется класс задач, для которых нет полиномиального решения?", answers: ["np", "np-полная", "np-complete", "np complete", "эн пи"] }
        ]
    },
    {
        name: "ООП",
        questions: [
            { points: 100, question: "Как называется подход к программированию, основанный на объектах?", answers: ["ооп", "объектно-ориентированное", "oop", "object-oriented", "объекты"] },
            { points: 200, question: "Как называется принцип сокрытия данных в объектах?", answers: ["инкапсуляция", "encapsulation", "капсуляция", "encaps", "сокрытие"] },
            { points: 300, question: "Как называется способность объектов вести себя по-разному при одном интерфейсе?", answers: ["полиморфизм", "polymorphism", "poly", "полиморф", "разное поведение"] },
            { points: 400, question: "Как называется механизм, позволяющий повторно использовать код через классы?", answers: ["наследование", "inheritance", "наслед", "inherit", "наследование кода"] },
            { points: 500, question: "Как называется класс, который нельзя создать напрямую, только унаследовать?", answers: ["абстракция", "abstract", "абстрактный", "abstract class", "абстракт"] }
        ]
    },
    {
        name: "Базы данных",
        questions: [
            { points: 100, question: "Как называется язык для выполнения запросов к базам данных?", answers: ["sql", "sequel", "эс кью эль", "structured query", "query lang"] },
            { points: 200, question: "Как называется уникальный идентификатор записи в таблице базы данных?", answers: ["первичный ключ", "primary key", "ключ", "primary", "pk"] },
            { points: 300, question: "Как называется операция соединения данных из двух таблиц?", answers: ["join", "соединение", "джоин", "merge", "table join"] },
            { points: 400, question: "Как называется процесс устранения избыточности в базе данных?", answers: ["нормализация", "normalization", "норм", "normalize", "нормализовать"] },
            { points: 500, question: "Как называется набор операций, выполняемых как единое целое?", answers: ["транзакция", "transaction", "trans", "транз", "операция"] }
        ]
    },
    {
        name: "Код",
        questions: [
            { points: 100, question: "Как называется именованная область памяти для хранения данных?", answers: ["переменная", "variable", "var", "перемен", "data"] },
            { points: 200, question: "Как называется блок кода, который выполняет определенную задачу?", answers: ["функция", "function", "func", "метод", "method"] },
            { points: 300, question: "Как называется конструкция для повторения кода несколько раз?", answers: ["цикл", "loop", "for", "while", "повтор"] },
            { points: 400, question: "Как называется конструкция для проверки условия в коде?", answers: ["if", "условие", "condition", "если", "check"] },
            { points: 500, question: "Как называется ошибка, возникающая во время выполнения программы?", answers: ["исключение", "exception", "error", "ошибка", "throw"] }
        ]
    },
    {
        name: "Сети",
        questions: [
            { points: 100, question: "Как называется протокол, используемый для адресации в Интернете?", answers: ["ip", "internet protocol", "интернет-протокол", "ай пи", "protocol"] },
            { points: 200, question: "Как называется протокол для надежной передачи данных?", answers: ["tcp", "transmission control", "тср", "control protocol", "tcp/ip"] },
            { points: 300, question: "Как называется протокол для передачи гипертекста в вебе?", answers: ["http", "hypertext", "гиппертекст", "web protocol", "https"] },
            { points: 400, question: "Как называется технология для защиты данных в сети?", answers: ["ssl", "tls", "secure", "шифрование", "security"] },
            { points: 500, question: "Как называется процесс определения маршрута данных в сети?", answers: ["роутинг", "routing", "маршрутизация", "route", "path"] }
        ]
    }
];

const designCategories = [
    {
        name: "UX/UI",
        questions: [
            { points: 100, question: "Как называется область дизайна, связанная с удобством пользователя?", answers: ["ux", "опыт", "user experience", "удобство", "usability"] },
            { points: 200, question: "Как называется схематическое изображение интерфейса перед разработкой?", answers: ["wireframe", "макет", "схема", "layout", "draft"] },
            { points: 300, question: "Какой принцип говорит, что интерфейс должен быть интуитивным?", answers: ["не заставляй думать", "intuitiveness", "простота", "intuitive", "usability"] },
            { points: 400, question: "Как называется метод сравнения двух версий интерфейса для улучшения?", answers: ["a/b тест", "ab testing", "тестирование", "сравнение", "test"] },
            { points: 500, question: "Как называется описание функциональности с точки зрения пользователя?", answers: ["user story", "пользовательская история", "история", "story", "scenario"] }
        ]
    },
    {
        name: "Цвета",
        questions: [
            { points: 100, question: "Как называется инструмент для подбора гармоничных цветов в дизайне?", answers: ["цветовой круг", "color wheel", "круг", "wheel", "palette"] },
            { points: 200, question: "Как называется цвет, который задает основной тон дизайна?", answers: ["primary color", "основной цвет", "primary", "главный", "base color"] },
            { points: 300, question: "Как называется цвет, противоположный основному на цветовом круге?", answers: ["complementary", "дополняющий", "дополнительный", "opposite", "contrast"] },
            { points: 400, question: "Как называются оттенки, ассоциирующиеся с теплом, например, красный?", answers: ["warm colors", "теплые", "warm", "теплые цвета", "red tones"] },
            { points: 500, question: "Как называются оттенки, ассоциирующиеся с прохладой, например, синий?", answers: ["cool colors", "холодные", "cool", "холодные цвета", "blue tones"] }
        ]
    },
    {
        name: "Шрифты",
        questions: [
            { points: 100, question: "Как называется тип шрифта без дополнительных декоративных линий?", answers: ["sans-serif", "без засечек", "sans", "гладкий", "straight"] },
            { points: 200, question: "Как называется тип шрифта с декоративными линиями на концах?", answers: ["serif", "засечки", "с засечками", "decor", "classic"] },
            { points: 300, question: "Как называется шрифт, используемый для акцентов и заголовков?", answers: ["display", "декоративный", "акцент", "decorative", "highlight"] },
            { points: 400, question: "Как называется шрифт, оптимизированный для легкого чтения текста?", answers: ["readable", "легкий", "читаемый", "clear", "text font"] },
            { points: 500, question: "Как называется шрифт, где все символы имеют одинаковую ширину?", answers: ["monospace", "моно", "моноширинный", "fixed", "code font"] }
        ]
    },
    {
        name: "Композиция",
        questions: [
            { points: 100, question: "Как называется пропорция, создающая визуальную гармонию в дизайне?", answers: ["золотое сечение", "golden ratio", "золотое", "ratio", "harmony"] },
            { points: 200, question: "Как называется область дизайна, привлекающая наибольшее внимание?", answers: ["фокус", "focus", "центр", "highlight", "attention"] },
            { points: 300, question: "Как называется равновесие элементов в дизайне для гармонии?", answers: ["баланс", "balance", "равновесие", "equilibrium", "symmetry"] },
            { points: 400, question: "Как называется повторение узоров или элементов в дизайне?", answers: ["паттерн", "pattern", "узважно", "repeat", "motif"] },
            { points: 500, question: "Как называется использование пустого пространства для улучшения читаемости?", answers: ["white space", "пространство", "пустое", "space", "empty"] }
        ]
    },
    {
        name: "Графика",
        questions: [
            { points: 100, question: "Как называется формат файла для хранения векторной графики?", answers: ["svg", "вектор", "vector", "scalable", "svg format"] },
            { points: 200, question: "Как называется формат файла для хранения растровой графики с прозрачностью?", answers: ["png", "растр", "raster", "transparent", "png format"] },
            { points: 300, question: "Как называется формат файла для сжатых изображений с потерей качества?", answers: ["jpg", "jpeg", "compressed", "image", "jpg format"] },
            { points: 400, question: "Как называется формат файла для анимированных изображений?", answers: ["gif", "анимация", "animated", "motion", "gif format"] },
            { points: 500, question: "Как называется свойство изображения, позволяющее видеть фон через него?", answers: ["alpha", "прозрачность", "transparency", "opaque", "see-through"] }
        ]
    }
];

const points = [100, 200, 300, 400, 500];
const HINT_COST = 50;
let categories = [];
let score = 0;
let currentQuestion = null;
let usedHint = false;

// Запуск новой игры
function startGame(theme) {
    try {
        localStorage.setItem('gameTheme', theme);
        localStorage.removeItem('gameState');
        window.location.href = `${theme}.html`;
    } catch (error) {
        console.error('Ошибка при запуске игры:', error);
    }
}

// Сохранение состояния игры
function saveGameState() {
    try {
        const gameState = { score, categories };
        localStorage.setItem('gameState', JSON.stringify(gameState));
    } catch (error) {
        console.error('Ошибка при сохранении состояния игры:', error);
    }
}

// Загрузка состояния игры
function loadGameState() {
    try {
        const savedState = localStorage.getItem('gameState');
        if (savedState) {
            const gameState = JSON.parse(savedState);
            score = gameState.score || 0;
            categories = gameState.categories || [];
            const scoreElement = document.getElementById('score');
            if (scoreElement) {
                scoreElement.textContent = 'Счет: ' + score;
            }
        }
    } catch (error) {
        console.error('Ошибка при загрузке состояния игры:', error);
        score = 0;
        categories = [];
    }
}

// Инициализация игрового поля
function initGame(theme) {
    loadGameState();
    if (!categories.length) {
        categories = theme === 'RPO' ? rpoCategories : designCategories;
    }

    const gameBoard = document.getElementById('game-board');
    if (!gameBoard) {
        console.error('Игровое поле не найдено');
        return;
    }

    gameBoard.innerHTML = '';
    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.textContent = category.name;
        categoryContainer.appendChild(categoryDiv);

        const questionsDiv = document.createElement('div');
        questionsDiv.className = 'questions';
        category.questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.textContent = question.points;
            if (question.answered) questionDiv.classList.add('disabled');
            questionDiv.onclick = () => showQuestion(category, question, questionDiv);
            questionsDiv.appendChild(questionDiv);
        });
        categoryContainer.appendChild(questionsDiv);

        gameBoard.appendChild(categoryContainer);
    });
}

// Показ вопроса
function showQuestion(category, question, questionDiv) {
    if (questionDiv.classList.contains('disabled')) return;

    currentQuestion = { category, question, questionDiv };
    usedHint = false;

    const questionModal = document.getElementById('question-modal');
    const questionText = document.getElementById('question-text');
    const answerInput = document.getElementById('answer-input');

    if (!questionModal || !questionText || !answerInput) {
        console.error('Не найдены элементы модального окна вопроса');
        return;
    }

    questionText.textContent = question.question;
    answerInput.value = '';
    questionModal.style.display = 'flex';
}

// Показ уведомления
function showNotification(message) {
    const notificationModal = document.getElementById('notification-modal');
    const notificationContent = document.getElementById('notification-content');

    if (!notificationModal || !notificationContent) {
        console.error('Не найдены элементы уведомления');
        return;
    }

    notificationContent.textContent = message;
    notificationModal.style.display = 'flex';
    setTimeout(() => {
        notificationModal.style.display = 'none';
    }, 2000);
}

// Показ подсказки
function showHint() {
    if (!currentQuestion) {
        console.error('Текущий вопрос не выбран');
        return;
    }

    usedHint = true;
    const firstLetter = currentQuestion.question.answers[0][0];
    const hintModal = document.getElementById('hint-modal');
    const hintText = document.getElementById('hint-text');

    if (!hintModal || !hintText) {
        console.error('Не найдены элементы модального окна подсказки');
        return;
    }

    hintText.textContent = 'Первая буква ответа: ' + firstLetter;
    hintModal.style.display = 'flex';
}

// Закрытие подсказки
function closeHint() {
    const hintModal = document.getElementById('hint-modal');
    if (hintModal) {
        hintModal.style.display = 'none';
    }
}

// Проверка ответа
function submitAnswer() {
    if (!currentQuestion) {
        console.error('Текущий вопрос не выбран');
        return;
    }

    const answerInput = document.getElementById('answer-input');
    const modalContent = document.getElementById('question-content');

    if (!answerInput || !modalContent) {
        console.error('Не найдены элементы для ответа');
        return;
    }

    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswers = currentQuestion.question.answers.map(answer => answer.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        let pointsEarned = currentQuestion.question.points;
        if (usedHint) {
            pointsEarned -= HINT_COST;
            showNotification('Правильно! Вы заработали ' + pointsEarned + ' баллов (с учетом подсказки).');
        } else {
            showNotification('Правильно! Вы заработали ' + pointsEarned + ' баллов.');
        }
        score += pointsEarned;
        modalContent.classList.add('correct-flash');
    } else {
        score -= currentQuestion.question.points;
        modalContent.classList.add('incorrect-flash');
        showNotification('Неправильно. Правильный ответ: ' + currentQuestion.question.answers[0]);
    }

    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = 'Счет: ' + score;
    }

    currentQuestion.question.answered = true;
    currentQuestion.questionDiv.classList.add('disabled');
    saveGameState();
    setTimeout(closeModal, 2000);
}

// Закрытие модального окна
function closeModal() {
    const questionModal = document.getElementById('question-modal');
    const notificationModal = document.getElementById('notification-modal');
    const hintModal = document.getElementById('hint-modal');

    if (questionModal) questionModal.style.display = 'none';
    if (notificationModal) notificationModal.style.display = 'none';
    if (hintModal) hintModal.style.display = 'none';

    currentQuestion = null;
    usedHint = false;
}

// Выход из игры
function exitGame() {
    try {
        localStorage.removeItem('gameState');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Ошибка при выходе из игры:', error);
    }
}

// Обработчик клика для закрытия уведомлений
document.addEventListener('click', (event) => {
    const notificationModal = document.getElementById('notification-modal');
    const notificationContent = document.getElementById('notification-content');

    if (notificationModal && notificationContent && notificationModal.style.display === 'flex' && !notificationContent.contains(event.target)) {
        notificationModal.style.display = 'none';
    }
});