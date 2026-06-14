// Your parsed JSON data object
const sourceData = {
  "wishes": [
    { "id" : 41, "name" : "زكية حياتلة", "location" : "Local", "message" : "حبيبتي رورو اللطيفة\nمبارك تخرجك\nعقبال الشهادات الأعلى\nاتمنى لك مستقبلا زاهرا\nورضا الله ورضا الوالدين\n😘😘😘❤️❤️❤️", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 42, "name" : "ريم", "location" : "Local", "message" : "مبروووك منها للأعلى ان شاء الله ❤️🎊🎉🎊🎉", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 43, "name" : "خالك هاشم ", "location" : "Local", "message" : "الف مبارك رورو المجتهدة \nفخامة الأسم تكفي \nرقية 🥰", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 13, "name" : "Shimoo ", "location" : "Local", "message" : " Congratulations  بغبغ 🎊 ", "date" : "15 May", "is_pinned" : 0 },
    { "id" : 14, "name" : "لينا  أحمد ", "location" : "Local", "message" : "🤣❤️  مبروك تخرجك  يا  بنت ابن عمة أمي   ", "date" : "15 May", "is_pinned" : 0 },
    { "id" : 12, "name" : "💜 خالك العزيز محمد 💜", "location" : "Local", "message" : "​حَبِيبَةُ خَالِهَا رُورُو الْجَمِيلَةْ....\nنَجَاحُكِ عِزُّ فَخْرٍ لِلْقَبِيلَةْ....\n​بِجِدٍ نِلْتِ مَرْتَبَةَ الْمَعَالِي....\nوَنِلْتِ شَهَادَةً عُلْيَا جَلِيلَة|....", "date" : "15 May", "is_pinned" : 1 },
    { "id" : 15, "name" : "Ahmad Issa", "location" : "Local", "message" : "Grattis till examen  RUGAYA ", "date" : "15 May", "is_pinned" : 0 },
    { "id" : 26, "name" : "Fofo🪷 ", "location" : "Local", "message" : "Du kannst stolz auf dich sein undIch gratuliere dir ganz herzlich zu deinem Erfolg. Herzliche Glückwünsche 🌸\nIch liebe dich ya bebi🫶🏻😁", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 27, "name" : "Inas Assad", "location" : "Local", "message" : "Chère Ruqaya,\n\nJe te souhaite succès et bonheur dans ta vie.\nمبرووك يا حلوة ❤️❤️", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 28, "name" : "Mohamad Assad", "location" : "Local", "message" : "Ich bin der Onkel deiner Mutter.\nLiebe Ruqaya, ich wünsche dir Erfolg und Glück im Leben.", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 30, "name" : "هبة شرعان ", "location" : "Local", "message" : "الله يوفقك بحياتك رورو العسل ويقدملك الخير دائما يارب من نجاح لنجاح", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 34, "name" : "عمتك ايناس", "location" : "Local", "message" : "بتمنالك حياة كلها حب ورضا  \n❤️❤️❤️❤️😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘 وسعادة 🌹🌹🌹🌹🌹🌹🌹 ياغاليتي", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 35, "name" : "سمية القطان بنت خالة والدتك ألف ألف مبارك ياعمري فخورة فيك ", "location" : "Local", "message" : "أسال الله أن يكرمك الله بخيري الدنيا والآخرة ويسعدك سعادة الدارين ويرضى عنك حبيبتي ", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 36, "name" : "مروة", "location" : "Local", "message" : "اتمنى لك مستقبل مزدهر وايام مليىة بالسعادة والفرح ", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 37, "name" : "Sara Sheta", "location" : "Local", "message" : "Congratulations on your graduation, dear Ruqaya! I wish you continued success 💖💖", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 38, "name" : "خالتك رزان", "location" : "Local", "message" : "ربي يسعدك ويجعل كل أيامك فرح أن شالله تكوني دائما بالمراتب العليا دنيا آخرة بنت أختي الغالية", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 39, "name" : "Mary", "location" : "Local", "message" : "Send you all the best of wishes for your future", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 40, "name" : "تقى المتقتقة ", "location" : "Local", "message" : "Ich wünsche dir alles Gute meine liebe رقية in deinen zukünftigen Leben.\nان شاء الله الف مبروك يا قلبي انتي و ان شاء الله منها للأعلى ❤️❤️❤️", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 44, "name" : "حنان ", "location" : "Local", "message" : "الف الف مبرووك حبيبتي رقية  ومنا للأعلى يارب وانشا الله بتحققي كل شي \n😘🥰😍 بتتمني ويوفقك بحياتك ", "date" : "20 May", "is_pinned" : 0 },
    { "id" : 45, "name" : "سماح ام عمر ", "location" : "Local", "message" : "أنا بنت خالة امك \nأحيي اطيب أم (نوره ) وأحلى بنت في العالم\n(🩷رقيه) ..\nاحلى الامنيات لحياة سعيده وناجحه بإذن الله \n", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 46, "name" : "سلمى", "location" : "Local", "message" : "مبروك التخرج رقية و منها للأعلى ياربو ان شاء الله دايما بنشوفك بأعلى المراتب وين ما بتحلمي🫶🏻", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 47, "name" : "Nadia ", "location" : "Local", "message" : "Congratulations cousin wish u all the best and success in ur life , inshaa Allah we will meet one day and get know each other love u ur cousin nadia😘😘", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 48, "name" : "ستك حسنيه", "location" : "Local", "message" : "الف مبروك واتمنى لك المستقبل المزهر حبيبتي رقيه  الصغيرة  وان شاء الله للأعلى دائما  ومحبتك كبيرة عندي بارقيه الاميرة", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 49, "name" : "خالتك رحاب ", "location" : "Local", "message" : "رقية الأميرة \nالف الف مبارك التخرج اتمنى لك مستقبل زاهر ومزيد من التقدم والنجاح وتميز باي مجال تلاقي حالك في \n", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 50, "name" : "Sara Turaani", "location" : "Local", "message" : "Wishing you a happy life and continued success, and may you always be well and among the most successful people. May God bless you and grant you success in your life. You deserve all the best, Ruqaya.\nYour cousin Sara.", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 51, "name" : "عمك محمد/ ابو إبراهيم ", "location" : "Local", "message" : "بالعلم زدتي إرتقاءً يا رقية \nبإجتهادكِ بتِ فيه على الجهل عصية \nراية نورِ قدمتها لوالديكِ هدية \nمنحتنا فخراً بتفوقكِ و وساماً كدرعٍ ذهبيا \nاستمري بالرقي و الارتقاء يا رقية ", "date" : "21 May", "is_pinned" : 0 },
    { "id" : 52, "name" : "I’m like your second mom. ", "location" : "Local", "message" : "ما بتعرفي قديش فرحتلك وفخورة فيكي ❤️\nعنجد بتستحقي كل خير، لأنك تعبتي وضلّيتي مكملة رغم كل شي.\nبتمنالك تحققي كل اللي بقلبك، وتشوفي حالك بالمكان اللي بتحلمي فيه يا رب.\nضلك متل ما إنتِ… طموحة، قوية، وبتجنني 🌷\n 😍😍 منحبك كتير كتير ", "date" : "22 May", "is_pinned" : 0 },
    { "id" : 54, "name" : " Ruba", "location" : "Local", "message" : "Meine Groze schwester Ich und meine Familie wunschen dir viel freude in dein Leben und kannst machen what dir Spaz macht🥰😇🥳", "date" : "22 May", "is_pinned" : 0 },
    { "id" : 55, "name" : "Iyad", "location" : "Local", "message" : "Du bist unsere Grose Schwester hir in Deutschland und ich wunsche dir gute Noten und das so bleibst", "date" : "22 May", "is_pinned" : 0 },
    { "id" : 56, "name" : "بأسمي وبأسم كآفة العوائل اليمنية المهنئون(ميعاد .ابتسام .ياسمين .ازهار )", "location" : "Local", "message" : "ألف مبروك التخرج يا رقية 🎓✨بعد تعب وسهر وصلتِ لهاللحظة الجميلة، ومنها للأعلى دائمًا يا رب.\n\n.نتمنى لك مستقبل زاهر ملي بالتفوق والنجاح 🌹🌹", "date" : "22 May", "is_pinned" : 0 },
    { "id" : 58, "name" : "أسماء العدوي ", "location" : "Local", "message" : "رقيتنا الجميلة مباااارك النجاح يليق بك جعل الله ايامك كلها أفراح و نجاحات♥️♥️♥️♥️", "date" : "23 May", "is_pinned" : 0 },
    { "id" : 59, "name" : "سلام عمر☺️", "location" : "Local", "message" : "ألف مبااارك رورو الحلوة بتستاهلي كل خير الله يوفقك و يبلغلك أعلى المراتب بالدنيا والآخرة و نجتمع فيك قريبااا🥹🥹♥️🫂🫂🌸🌸", "date" : "23 May", "is_pinned" : 0 },
    { "id" : 61, "name" : "Uschi und Jürgen ", "location" : "Local", "message" : "Alles Gute liebe Ruqayya\nZum Schulabschluss\nWir wünschen dir auf für deine Zukunft das Beste\n\nLiebe Grüße \n\n", "date" : "24 May", "is_pinned" : 0 },
    { "id" : 62, "name" : "Heba", "location" : "Local", "message" : "ألف مبرووك رقية الرقيقة ❤️❤️ عقبال تخرجك بالشهادات الأعلى ونشوفك بأعلى المراتب 🎉🎉", "date" : "27 May", "is_pinned" : 0 },
    { "id" : 63, "name" : "نادرة ", "location" : "Local", "message" : "بتمنالك التفوق والنجاح وتحققي كلشي بتتمنيه ", "date" : "2 Jun", "is_pinned" : 0 },
    { "id" : 64, "name" : "Leila ", "location" : "Local", "message" : "Je te félicite de tout cœur pour ta réussite et ton diplôme. Je te souhaite beaucoup de succès dans tes études et dans ta vie, ainsi que de la chance, du bonheur et de la réussite dans tous les domaines de la vie. Que tous tes rêves se réalisent.", "date" : "2 Jun", "is_pinned" : 0 },
    { "id" : 65, "name" : "Abdulrahman ", "location" : "Local", "message" : "Congrats..you made it🙌🏻 🎓\n\nWishing you a bright journey ahead and a lifetime of grand achievements. \n\n", "date" : "3 Jun", "is_pinned" : 0 },
    { "id" : 29, "name" : " روح قلب البابا رورو", "location" : "Local", "message" : "الف الف مبروووك حبيبة قلبي رورو الغالية ومنها للشهادات العليا الله يوفقك ويحققلك امنياتك 😘🎓🎓يا رب", "date" : "20 May", "is_pinned" : 1 },
    { "id" : 66, "name" : "💕الحبيبة", "location" : "Local", "message" : "🌹🌷الحمد لله الذي بلغني ماأحب في من أحب فرحتي نجاحك لا توصفها الكلمات سعادتك ...وانجازك فخرا لنا 🌹🌷", "date" : "5 Jun", "is_pinned" : 1 }
  ]
};

// 1. First, sort the original family wishes so pinned items (is_pinned: 1) appear at the top
const sortedWishes = [...sourceData.wishes].sort((a, b) => b.is_pinned - a.is_pinned);

// 2. Define your global introduction page object
const introPage = {
    "id": 0,
    "name": "A World of Congratulations",
    "message": "5 different languages, \nand across multiple borders...\n\nMore than 50 hearts have come together \nto celebrate your success.\n\nThis notebook is for you, ya Ruqayya! ❤️✨",
    "date": "Graduation 2026",
    "is_pinned": 0
};

// 3. Unshift the introPage directly to the front of our sorted list so it is ALWAYS page 1
sortedWishes.unshift(introPage);

let currentIndex = 0;

// Grab DOM elements
const notebookPage = document.getElementById('notebook-page');
const pageContent = document.getElementById('page-content');
const textElement = document.getElementById('comment-text');
const authorElement = document.getElementById('comment-author');
const dateElement = document.getElementById('comment-date');
const pageNumberElement = document.getElementById('page-number');

// Function to safely update values with transition
function renderPage(index) {
    const currentWish = sortedWishes[index];
    
    // Trigger CSS slide-fade out
    pageContent.classList.add('turning');

    setTimeout(() => {
        textElement.textContent = currentWish.message;
        
        // Custom touch: Hide author formatting prefix if it's the global intro page
        if (currentWish.id === 0) {
            authorElement.textContent = currentWish.name;
        } else {
            authorElement.textContent = `— ${currentWish.name}`;
        }
        
        dateElement.textContent = currentWish.date;
        pageNumberElement.textContent = `${index + 1} / ${sortedWishes.length}`;
        
        // Smoothly slide back in
        pageContent.classList.remove('turning');
    }, 400);
}

// Global click event to advance pages
notebookPage.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sortedWishes.length;
    renderPage(currentIndex);
});

// Setup opening view values on boot
document.addEventListener('DOMContentLoaded', () => {
    if (sortedWishes.length > 0) {
        textElement.textContent = sortedWishes[0].message;
        authorElement.textContent = sortedWishes[0].name;
        dateElement.textContent = sortedWishes[0].date;
        pageNumberElement.textContent = `1 / ${sortedWishes.length}`;
    }
});