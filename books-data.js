// קובץ זה נוצר אוטומטית על-ידי build.js מתוך data.xlsx. אין לערוך ידנית - השינויים יימחקו בבנייה הבאה.
const BOOKS_DATA = [
  {
    "index": 0,
    "name": "בית בלגראד",
    "style": "רומן רומנטי",
    "author": "פאולינה סיימונס",
    "publisher": "מודן",
    "imageUrl": "../Images/בית_בלגראנד.jpg"
  },
  {
    "index": 1,
    "name": "בלדה לאהבת נעורי",
    "style": "רומן רומנטי",
    "author": "היידי מק'לפלין",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/בלדה_לאהבת_נעורי.jpg"
  },
  {
    "index": 2,
    "name": "בר הרינגול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 3,
    "name": "הטובה שבמרגלות",
    "style": "מתח ופעולה",
    "author": "אלכס גרליס",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/הטובה_שבמרגלות.jpg"
  },
  {
    "index": 4,
    "name": "הסודות שהולכים איתנו",
    "style": "רומן רומנטי",
    "author": "קרי לונסדייל",
    "publisher": "אהבות הוצאה לאור",
    "imageUrl": "../Images/הסודות_שהולכים_איתנו.jpg"
  },
  {
    "index": 5,
    "name": "יש אלוהים",
    "style": "פרוזה מקור",
    "author": "קארין ארד",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/יש_אלוהים.jpg"
  },
  {
    "index": 6,
    "name": "כוכב הצפון",
    "style": "מתח ופעולה",
    "author": "ד\"ב ג'ון",
    "publisher": "כתר",
    "imageUrl": "../Images/כוכב_הצפון.jpg"
  },
  {
    "index": 7,
    "name": "לונלי",
    "style": "פרוזה מקור",
    "author": "פלג כהן",
    "publisher": "ספרי ניב",
    "imageUrl": "../Images/לונלי.jpg"
  },
  {
    "index": 8,
    "name": "מוסר לבן",
    "style": "מתח ופעולה",
    "author": "ענבל אלמוזנינו",
    "publisher": "ספרות שנוגעת",
    "imageUrl": "../Images/מוסר_לבן.jpg"
  },
  {
    "index": 9,
    "name": "מרי פופינס",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "פמלה טרוורס",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/מרי_פופינס.jpg"
  },
  {
    "index": 10,
    "name": "סנטה מונטיפ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 11,
    "name": "שניים שניים",
    "style": "רומן רומנטי",
    "author": "ניקולס ספארקס",
    "publisher": "מודן",
    "imageUrl": "../Images/שניים_שניים.jpg"
  },
  {
    "index": 12,
    "name": "2084",
    "style": "עיון, היסטוריה ופוליטיקה",
    "author": "פרופ' דוד פסיג",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/2048.jpg"
  },
  {
    "index": 13,
    "name": "אגדוטת גרין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 14,
    "name": "אהבה באחוזת טיינפורד",
    "style": "רומן רומנטי",
    "author": "נטשה סולומונס",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/אהבה_באחוזת_טיינפורד.jpg"
  },
  {
    "index": 15,
    "name": "אי האהבה לאין קיץ",
    "style": "סיפורת",
    "author": "דאינה צ'וויאנו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/אי_האהבה_לאין_קיץ.jpg"
  },
  {
    "index": 16,
    "name": "אמא קומי",
    "style": "פרוזה מקור",
    "author": "אלדד כהן",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/אמא_קומי.jpg"
  },
  {
    "index": 17,
    "name": "ג'לי - מתחילה ברגל שמאל",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "קנדי גארד",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/גלי_מתחילה_ברגל_שמאל.jpg"
  },
  {
    "index": 18,
    "name": "גרגרים וזרעונים",
    "style": "פעוטות וילדי גן",
    "author": "דתיה בן דור",
    "publisher": "מודן",
    "imageUrl": "../Images/גרגרים_וזרעונים.jpg"
  },
  {
    "index": 19,
    "name": "דירת שותפים",
    "style": "רומן רומנטי",
    "author": "בת׳ אולירי",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/דירת_שותפים.jpg"
  },
  {
    "index": 20,
    "name": "הבן האחרון",
    "style": "פרוזה מקור",
    "author": "רפל נדאל",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/הבן_האחרון.jpg"
  },
  {
    "index": 21,
    "name": "הכלה מאיסטמבול",
    "style": "רומן רומנטי",
    "author": "גולסרין בודאיג'אולו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/הכלה_מאיסטמבול.jpg"
  },
  {
    "index": 22,
    "name": "המעיל חתום של דוד נחום",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 23,
    "name": "המפענחים",
    "style": "מתח ופעולה",
    "author": "מייקל קונלי",
    "publisher": "מודן",
    "imageUrl": "../Images/המפענחים.jpg"
  },
  {
    "index": 24,
    "name": "המרכזנית",
    "style": "פרוזה מקור",
    "author": "גרטשן ברג",
    "publisher": "תכלת",
    "imageUrl": "../Images/המרכזנית.jpg"
  },
  {
    "index": 25,
    "name": "המרכיבים הסודיים של האהבה",
    "style": "רומן רומנטי",
    "author": "ניקולא בארו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/המרכיבים_הסודיים_של_האהבה.jpg"
  },
  {
    "index": 26,
    "name": "המשחק ממשיך",
    "style": "רומן רומנטי",
    "author": "סמנתה יאנג",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/המשחק_ממשיך.jpg"
  },
  {
    "index": 27,
    "name": "הנסיכה סלינה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 28,
    "name": "הנערה שלא היתה",
    "style": "מתח ופעולה",
    "author": "אדיבה גפן",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/הנערה_שלא_היתה.jpg"
  },
  {
    "index": 29,
    "name": "הציור האחרון של ואן גוך",
    "style": "רומן רומנטי",
    "author": "אליסון ריצ'מן",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/הציור_האחרון_של_ואן_גוך.jpg"
  },
  {
    "index": 30,
    "name": "השרשרת",
    "style": "מתח ופעולה",
    "author": "אדיראן מקינטי",
    "publisher": "מתר",
    "imageUrl": "../Images/השרשרת.jpg"
  },
  {
    "index": 31,
    "name": "וויל גרייסון",
    "style": "נוער בוגר",
    "author": "דיוויד לוויתן, ג'ון גרין",
    "publisher": "מודן",
    "imageUrl": "../Images/וויל_גרייסון.jpg"
  },
  {
    "index": 32,
    "name": "זרים",
    "style": "פרוזה מקור",
    "author": "גבריאל בן שמחון",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/זרים.jpg"
  },
  {
    "index": 33,
    "name": "חשד",
    "style": "מתח ופעולה",
    "author": "ג'וזף פיינדר",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/חשד.jpg"
  },
  {
    "index": 34,
    "name": "לא בלי בתי",
    "style": "פרוזה מקור",
    "author": "בטי מחמודי",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/לא_בלי_בתי.jpg"
  },
  {
    "index": 35,
    "name": "מושלם",
    "style": "רומן רומנטי",
    "author": "קולין הובר",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/מושלם.jpg"
  },
  {
    "index": 36,
    "name": "מסטר פיפ",
    "style": "פרוזה מקור",
    "author": "לויד ג'ונס",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/מסטר_פיפ.jpg"
  },
  {
    "index": 37,
    "name": "מסתערבים",
    "style": "עיון, היסטוריה ופוליטיקה",
    "author": "מתי פרידמן",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/מסתערבים.jpg"
  },
  {
    "index": 38,
    "name": "מעבר חציה המצאה נהדרת",
    "style": "ילדים ונוער",
    "author": "דתיה בן-דור",
    "publisher": "מודן",
    "imageUrl": "../Images/מעבר_חציה_המצאה_נהדרת.jpg"
  },
  {
    "index": 39,
    "name": "מצפון שחור",
    "style": "מתח ופעולה",
    "author": "ענבל אלמוזנינו",
    "publisher": "ספרות שנוגעת",
    "imageUrl": "../Images/מצפון_שחור.jpg"
  },
  {
    "index": 40,
    "name": "מתנת כוכבים",
    "style": "פרוזה מקור",
    "author": "ג'וג'ו מויס",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/מתנת_כוכבים.jpg"
  },
  {
    "index": 41,
    "name": "נוסחת הנשיקה",
    "style": "רומן רומנטי",
    "author": "הלן הואנג",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/נוסחת_הנשיקה.jpg"
  },
  {
    "index": 42,
    "name": "נכון לא נכון",
    "style": "ילדים",
    "author": "דתיה בן-דור",
    "publisher": "מודן",
    "imageUrl": "../Images/נכון_לא_נכון.jpg"
  },
  {
    "index": 43,
    "name": "נפשות תאומות",
    "style": "רומן רומנטי",
    "author": "יהודית צפורי",
    "publisher": "בוקטיק",
    "imageUrl": "../Images/נפשות_תאומות.jpg"
  },
  {
    "index": 44,
    "name": "נשואה לאמריקה",
    "style": "סיפורת",
    "author": "קרטיס סיטנפלד",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/נשואה_לאמריקה.jpg"
  },
  {
    "index": 45,
    "name": "נשות הקיץ",
    "style": "סיפורת",
    "author": "ביאטריס ויליאמס",
    "publisher": "תכלת",
    "imageUrl": "../Images/נשות_הקיץ.jpg"
  },
  {
    "index": 46,
    "name": "נשכחים",
    "style": "מתח ופעולה",
    "author": "שרה פינבורו",
    "publisher": "דני ספרים",
    "imageUrl": "../Images/נשכחים.jpg"
  },
  {
    "index": 47,
    "name": "סודה של מספרת הסיפורים",
    "style": "פרוזה מקור",
    "author": "סג'אל בדאני",
    "publisher": "מודן",
    "imageUrl": "../Images/סודה_של_מספרת_הסיפורים.jpg"
  },
  {
    "index": 48,
    "name": "ספורי אנדרסון",
    "style": "ילדים",
    "author": "הרטלי סטפניה לאונרדי",
    "publisher": "קוראים",
    "imageUrl": "../Images/ספורי_אנדרסון.jpg"
  },
  {
    "index": 49,
    "name": "עיר של בנות",
    "style": "רומן רומנטי",
    "author": "אליזבת גילברט",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/עיר_של_בנות.jpg"
  },
  {
    "index": 50,
    "name": "עץ או פלי",
    "style": "פרוזה מקור",
    "author": "ג'פרי ארצ'ר",
    "publisher": "מודן",
    "imageUrl": "../Images/עץ_או_פלי.jpg"
  },
  {
    "index": 51,
    "name": "פרנצ'סקה",
    "style": "מתח ופעולה",
    "author": "לינה בנגטסדוטר",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/פרנצסקה.jpg"
  },
  {
    "index": 52,
    "name": "רציחות האלפבית",
    "style": "מתח ופעולה",
    "author": "אגתה כריסטי",
    "publisher": "עם עובד",
    "imageUrl": "../Images/רציחות_האלפבית.jpg"
  },
  {
    "index": 53,
    "name": "שדות הלב",
    "style": "רומן רומנטי",
    "author": "אמבר קלי",
    "publisher": "אופוריה",
    "imageUrl": "../Images/שדות_הלב.jpg"
  },
  {
    "index": 54,
    "name": "שתי שלגיות",
    "style": "פרוזה מקור",
    "author": "עירית לינור",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/שתי_שלגיות.jpg"
  },
  {
    "index": 55,
    "name": "בית הסודות",
    "style": "פרוזה מקור",
    "author": "מיכל חזון",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/בית_הסודות.jpg"
  },
  {
    "index": 56,
    "name": "בנותיו של שומר המגדלור",
    "style": "פרוזה מקור",
    "author": "ג'ין פנזיוול",
    "publisher": "תכלת",
    "imageUrl": "../Images/בנותיו_של_שומר_המגדלור.jpg"
  },
  {
    "index": 57,
    "name": "גיא בן הינום",
    "style": "מתח ופעולה",
    "author": "יפתח אשכנזי",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/גיא_בן_הינום.jpg"
  },
  {
    "index": 58,
    "name": "האחרות",
    "style": "מתח ופעולה",
    "author": "שהרה בלאו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/האחרות.jpg"
  },
  {
    "index": 59,
    "name": "האשליה",
    "style": "פרוזה מקור",
    "author": "עמנואל ברגמן",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/האשליה.jpg"
  },
  {
    "index": 60,
    "name": "החברה הגאונה",
    "style": "פרוזה מקור",
    "author": "אלנה פרנטה",
    "publisher": "הקיבוץ המאוחד",
    "imageUrl": "../Images/החברה_הגאונה.jpg"
  },
  {
    "index": 61,
    "name": "החיים החדשים של לילי שפרד",
    "style": "פרוזה מקור",
    "author": "ריס רייצל",
    "publisher": "תכלת",
    "imageUrl": "../Images/החיים_החדשים_של_לילי_שפרד.jpg"
  },
  {
    "index": 62,
    "name": "הילד המקסיקני",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 63,
    "name": "הפרחים האבודים של אליס הארט",
    "style": "פרוזה מקור",
    "author": "הולי רינגלנד",
    "publisher": "תכלת",
    "imageUrl": "../Images/הפרחים_האבודים_של_אליס_הארט.jpg"
  },
  {
    "index": 64,
    "name": "השבוי ואשת השבוי",
    "style": "ביוגרפיה",
    "author": "רמי ונורית הרפז",
    "publisher": "מטר",
    "imageUrl": "../Images/השבוי_ואשת_השבוי.jpg"
  },
  {
    "index": 65,
    "name": "זמן צבים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 66,
    "name": "יפים כמו שהיינו",
    "style": "פרוזה מקור",
    "author": "רון לשם",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/יפים_כמו_שהיינו.jpg"
  },
  {
    "index": 67,
    "name": "כל הדברים הטובים",
    "style": "פרוזה מקור",
    "author": "קלייר פישר",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/כל_הדברים_הטובים.jpg"
  },
  {
    "index": 68,
    "name": "לעולם אל תיתני לי ללכת",
    "style": "מד\"ב ופנטזיה",
    "author": "קאזואו‏ אישיגורו",
    "publisher": "הקיבוץ המאוחד",
    "imageUrl": "../Images/לעולם_אל_תיתני_לי_ללכת.jpg"
  },
  {
    "index": 69,
    "name": "מגדת העתידות",
    "style": "פרוזה מקור",
    "author": "רם אורן",
    "publisher": "קשת",
    "imageUrl": "../Images/מגדת_העתידות.jpg"
  },
  {
    "index": 70,
    "name": "מקומות אפלים",
    "style": "מתח ופעולה",
    "author": "גיליאן פלין",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/מקומות_אפלים.jpg"
  },
  {
    "index": 71,
    "name": "נסיך שבור",
    "style": "רומן רומנטי",
    "author": "ארין וואט",
    "publisher": "ספרות שנוגעת",
    "imageUrl": "../Images/נסיך_שבור.jpg"
  },
  {
    "index": 72,
    "name": "נסיכה של נייר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 73,
    "name": "סדקים בזהב",
    "style": "רומן רומנטי",
    "author": "מיכל שלו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/סדקים_בזהב.jpg"
  },
  {
    "index": 74,
    "name": "סיפורו של יתום",
    "style": "פרוזה מקור",
    "author": "פאם ג'נוף",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/סיפורו_של_יתום.jpg"
  },
  {
    "index": 75,
    "name": "ערי טרף",
    "style": "נוער בוגר",
    "author": "פיליפ ריב",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/ערי_טרף.jpg"
  },
  {
    "index": 76,
    "name": "שלוש",
    "style": "מתח ופעולה",
    "author": "דרור משעני",
    "publisher": "אחוזת בית",
    "imageUrl": "../Images/שלוש.jpg"
  },
  {
    "index": 77,
    "name": "שנות העשרים",
    "style": "פרוזה מקור",
    "author": "יערה שחורי",
    "publisher": "כתר",
    "imageUrl": "../Images/שנות_העשרים.jpg"
  },
  {
    "index": 78,
    "name": "שתי האחיות",
    "style": "פרוזה מקור",
    "author": "דויד פואנקינוס",
    "publisher": "כתר",
    "imageUrl": "../Images/שתי_האחיות.jpg"
  },
  {
    "index": 79,
    "name": "תאומות הקרח",
    "style": "מתח ופעולה",
    "author": "ס\"ק טרמיין",
    "publisher": "כתר",
    "imageUrl": "../Images/תאומות_הקרח.jpg"
  },
  {
    "index": 80,
    "name": "תציל אותי",
    "style": "מתח ופעולה",
    "author": "גיום מוסו",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/תציל_אותי.jpg"
  },
  {
    "index": 81,
    "name": "אומנות חרושים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 82,
    "name": "אחותו של צייד המכשפות",
    "style": "פרוזה מקור",
    "author": "בת' אנדרדאון",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/אחותו_של_צייד_המכשפות.jpg"
  },
  {
    "index": 83,
    "name": "איגי ואני",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "ג'ני ולנטיין",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/איגי_ואני.jpg"
  },
  {
    "index": 84,
    "name": "אל תגיד כלום",
    "style": "מתח ופעולה",
    "author": "בראד פרקס",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/אל_תגיד_כלום.jpg"
  },
  {
    "index": 85,
    "name": "אנגרי ברדס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 86,
    "name": "בן יחיד",
    "style": "פרוזה מקור",
    "author": "אבי גרפינקל",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/בן_יחיד.jpg"
  },
  {
    "index": 87,
    "name": "דוקטור מולקולה",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "וייל אורי",
    "publisher": "מודן",
    "imageUrl": "../Images/דוקטור_מולקולה.jpg"
  },
  {
    "index": 88,
    "name": "דרמה",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "ריינה טלגמאייר",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/דרמה.jpg"
  },
  {
    "index": 89,
    "name": "הם יורים גם בסוסים",
    "style": "פרוזה מקור",
    "author": "הוראס מקוי",
    "publisher": "אחוזת בית",
    "imageUrl": "../Images/הם_יורים_גם_בסוסים.jpg"
  },
  {
    "index": 90,
    "name": "הנסיכה שרלוטי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 91,
    "name": "הנשף",
    "style": "רומן רומנטי",
    "author": "אנה הופ",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/הנשף.jpg"
  },
  {
    "index": 92,
    "name": "הסגת גבול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 93,
    "name": "ואחיות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 94,
    "name": "חיוך",
    "style": "ראשית קריאה ונוער צעיר",
    "author": "ריינה טלגמאייר",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/חיוך.jpg"
  },
  {
    "index": 95,
    "name": "טינקל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 96,
    "name": "ילדג",
    "style": "פעוטות וילדי גן",
    "author": "עדי זליכוב-רלוי",
    "publisher": "ידיעות ספרים",
    "imageUrl": "../Images/ילדג.jpg"
  },
  {
    "index": 97,
    "name": "ינשופים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 98,
    "name": "סורח המשי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 99,
    "name": "סנדרלה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 100,
    "name": "שלגיה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 101,
    "name": "שקספיר לפני השינה",
    "style": "ילדים",
    "author": "טל ניצן",
    "publisher": "אחוזת בית",
    "imageUrl": "../Images/שקספיר_לפני_השינה.jpg"
  },
  {
    "index": 102,
    "name": "תעלות הבקבוק המכושף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 103,
    "name": "אל תעזוב",
    "style": "מתח ופעולה",
    "author": "הרלן קובן",
    "publisher": "כנרת זמורה דביר",
    "imageUrl": "../Images/אל_תעזוב.jpg"
  },
  {
    "index": 104,
    "name": "בית הרעיות",
    "style": "פרוזה מקור",
    "author": "סיימון צ'ואה ג'ונסון",
    "publisher": "כתר",
    "imageUrl": "../Images/בית_הרעיות.jpg"
  },
  {
    "index": 105,
    "name": "דיאטה 21 ימים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 106,
    "name": "הדירה ברחוב אמלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 107,
    "name": "החיים הסודיים של הדבורים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 108,
    "name": "המרגל האנגלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 109,
    "name": "והלב הולך אחרון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 110,
    "name": "חיי אחרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 111,
    "name": "כפתורים  ועוצמה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 112,
    "name": "להבה וצל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 113,
    "name": "ליל כל המכשפות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 114,
    "name": "מאחורי עיניה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 115,
    "name": "ניצוץ של אור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 116,
    "name": "עד קצה העולם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 117,
    "name": "על מקום המצאה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 118,
    "name": "קודם כול אהבה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 119,
    "name": "אינסטמבול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 120,
    "name": "אמא של הים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 121,
    "name": "אפשר לגלות לך סוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 122,
    "name": "בארבע ידיים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 123,
    "name": "בחזרה לטואיצי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 124,
    "name": "גנבת הספרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 125,
    "name": "דירה בפריז",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 126,
    "name": "האישה בחלון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 127,
    "name": "הגירוש מן הארמון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 128,
    "name": "היינו בני מזל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 129,
    "name": "הילדה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 130,
    "name": "המעגל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 131,
    "name": "מחול ואפר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 132,
    "name": "סודות של חיים מופלאים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 133,
    "name": "צעד גדול קטן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 134,
    "name": "שטן בירושלים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 135,
    "name": "שמים פתוחים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 136,
    "name": "שמים שאין להם חוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 137,
    "name": "אובסייה עיוורת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 138,
    "name": "אחו פארק",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 139,
    "name": "אחות הסערה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 140,
    "name": "אל שולחנו של הזאב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 141,
    "name": "אליסה בארץ המראה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 142,
    "name": "בעקבות הזומבים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 143,
    "name": "הממזרה מאינסטמבול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 144,
    "name": "הסודות ששמרנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 145,
    "name": "הראמל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 146,
    "name": "כל ההערות הנעלמות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 147,
    "name": "מוחו של רוצח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 148,
    "name": "מיתרי הלב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 149,
    "name": "רובין הוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 150,
    "name": "רוחות של נייר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 151,
    "name": "שלוש משאלות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 152,
    "name": "תעתוע",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 153,
    "name": "אישה מעבר לים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 154,
    "name": "אםרסקים לאדוני הכומר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 155,
    "name": "אני אף אחד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 156,
    "name": "ביום בו תקרא לי אבא",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 157,
    "name": "האיש האחרון במגדל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 158,
    "name": "האנשים שאהבנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 159,
    "name": "הדירה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 160,
    "name": "החיים החדשים של לילי שפרד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 161,
    "name": "המטופלת השקטה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 162,
    "name": "כל נשימה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 163,
    "name": "לוכד הטיגרסים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 164,
    "name": "מה שנטע אוהבת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 165,
    "name": "מטרה סופית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 166,
    "name": "פנקס הכתובות האדום",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 167,
    "name": "צמאה לך נפשי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 168,
    "name": "שמים אדומים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 169,
    "name": "שנה בקזבלנקה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 170,
    "name": "המנהרה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 171,
    "name": "כל אהבותיו של אליעזר בן יהודה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 172,
    "name": "תקלה בקצה הגלקסיה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 173,
    "name": "איטלקית למתחילים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 174,
    "name": "לנשום",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 175,
    "name": "יום של דיו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 176,
    "name": "מדרגות אינסטמבול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 177,
    "name": "חולות נודדים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 178,
    "name": "זמן עבר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 179,
    "name": "קודם כל אהבה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 180,
    "name": "נפלאות הטיפשות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 181,
    "name": "קוטפי הזכרונות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 182,
    "name": "אפקט רוזי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 183,
    "name": "עיר של מאגה שחורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 184,
    "name": "שומר המגדלור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 185,
    "name": "והיום אינו כלה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 186,
    "name": "למה אני קופץ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 187,
    "name": "כולם נופלים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 188,
    "name": "הרשימה הסודית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 189,
    "name": "13 סיבות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 190,
    "name": "אהבה ברחוב דבלין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 191,
    "name": "אהבה בסמטית ג'מיקה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 192,
    "name": "אהבה ברחוב סקוטלנד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 193,
    "name": "אהבה בנתיב וייטינגייט",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 194,
    "name": "אחותי רוצחת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 195,
    "name": "רוני ותום חלק 1",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 196,
    "name": "האמת שבפנים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 197,
    "name": "האיש על החוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 198,
    "name": "תקתוק בקומה למטה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 199,
    "name": "נשבעת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 200,
    "name": "גברת גם וגפ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 201,
    "name": "שקרן יפיפה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 202,
    "name": "הזכות לאהוב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 203,
    "name": "רק המעז",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 204,
    "name": "התחקיר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 205,
    "name": "סירות הדרקון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 206,
    "name": "סיד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 207,
    "name": "האחרות האבודה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 208,
    "name": "שקרים הכרחיים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 209,
    "name": "מגע של חסד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 210,
    "name": "המשרד לאושר עילאי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 211,
    "name": "נסיכה בתיאוריה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 212,
    "name": "מנהרות של שתיקה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 213,
    "name": "הגיע הזמן להדליק את הכוכבים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 214,
    "name": "נפילה חופשית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 215,
    "name": "קראון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 216,
    "name": "ריפר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 217,
    "name": "כאב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 218,
    "name": "יריבים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 219,
    "name": "בולי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 220,
    "name": "עד שבאת את",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 221,
    "name": "מחברת האמת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 222,
    "name": "משה וגדיךהתעורר עם הספק",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 223,
    "name": "מצור בערפל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 224,
    "name": "הנעדרת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 225,
    "name": "כי את שלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 226,
    "name": "אל תוך האש",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 227,
    "name": "ממלכת הקבצנים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 228,
    "name": "ההבטחה האחרונה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 229,
    "name": "מנצחת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 230,
    "name": "השומרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 231,
    "name": "כלוב הזהב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 232,
    "name": "ברוכה הבא לחיים שלך",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 233,
    "name": "מריה על המים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 234,
    "name": "שירת הברבור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 235,
    "name": "בנות הלילך",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 236,
    "name": "סודות בית השמפניה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 237,
    "name": "תואכל מעיל תוכל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 238,
    "name": "BLUE MOON",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 239,
    "name": "האריה האגדי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 240,
    "name": "כאילו אין מחר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 241,
    "name": "החיה בבטן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 242,
    "name": "הלביאה הלוחמת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 243,
    "name": "לב פלדה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 244,
    "name": "לב חצוי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 245,
    "name": "לב שקוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 246,
    "name": "אהבה אסורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 247,
    "name": "אחרי שהתנגשנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 248,
    "name": "אחשי שנפלנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 249,
    "name": "אחרי שהגענו לסוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 250,
    "name": "הגברת ממלןן ריץ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 251,
    "name": "האריות מסיציליה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 252,
    "name": "מלכת יופי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 253,
    "name": "הוקי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 254,
    "name": "סקיילר שלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 255,
    "name": "סמנים קטנים של אושר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 256,
    "name": "מה המספר שלך",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 257,
    "name": "כשיהיינו בנות יפ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 258,
    "name": "המורדת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 259,
    "name": "אחרי ש...",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 260,
    "name": "זכרות מפינת החדר הסגלגל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 261,
    "name": "קראון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 262,
    "name": "הלב תמיד זוכר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 263,
    "name": "אדם זר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 264,
    "name": "בית התא על פס המות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 265,
    "name": "פרפר במחסן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 266,
    "name": "שלוש משאלות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 267,
    "name": "הפתק",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 268,
    "name": "הנדר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 269,
    "name": "הסודות שהשארנו מאחור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 270,
    "name": "זה נמס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 271,
    "name": "אף אחד לא עוזב את פאלו וולטו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 272,
    "name": "איש שטח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 273,
    "name": "זה זהיה שם קודם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 274,
    "name": "הדרך אל האור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 275,
    "name": "בורדליין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 276,
    "name": "מאחורי עייניה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 277,
    "name": "בעלי לא בבית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 278,
    "name": "תא 8",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 279,
    "name": "זמן שאול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 280,
    "name": "המלטות מהחשיכה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 281,
    "name": "להחליף את המים של הפרחים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 282,
    "name": "הסוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 283,
    "name": "המתריעים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 284,
    "name": "מטורםת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 285,
    "name": "לכתוב כמו אלוהים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 286,
    "name": "ג'ינגי 2",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 287,
    "name": "יומני החנונית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 288,
    "name": "העדיות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 289,
    "name": "הערעור האחרון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 290,
    "name": "פרפר בכפור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 291,
    "name": "איש הלחישות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 292,
    "name": "מסעודה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 293,
    "name": "שירת סרטני הנהר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 294,
    "name": "מישהו לאהוב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 295,
    "name": "המחשבה שניה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 296,
    "name": "הסודות שהולכים איתנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 297,
    "name": "שלוש נשים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 298,
    "name": "העלמה והלילה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 299,
    "name": "אם טובה דיה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 300,
    "name": "אירוסין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 301,
    "name": "לאהוב בדרכי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 302,
    "name": "חלומות מתוקים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 303,
    "name": "ההימור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 304,
    "name": "נסו את זה בבית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 305,
    "name": "נסו את זה בבית 2",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 306,
    "name": "צעדים קטנים שך אהבה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 307,
    "name": "האחיות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 308,
    "name": "תגובה נגדית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 309,
    "name": "מה שאבד בזמן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 310,
    "name": "ארבע מדברות ואחצ שותקת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 311,
    "name": "לא כזה בחור נחמד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 312,
    "name": "ארלינג ינסן ומסיכת הדמים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 313,
    "name": "עד שאבק ישקע",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 314,
    "name": "הרג קומנדוטורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 315,
    "name": "לחסל את הדרקון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 316,
    "name": "לרדוף את הדרקון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 317,
    "name": "מרינה של הים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 318,
    "name": "פני השטח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 319,
    "name": "חתן הפרס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 320,
    "name": "הכפר האבוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 321,
    "name": "סימן שאלה הוא חצי לב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 322,
    "name": "החיים הכפולים של לידיה בירד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 323,
    "name": "ילד יחיד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 324,
    "name": "אשת סודו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 325,
    "name": "הענק הקבור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 326,
    "name": "לרשת את אידית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 327,
    "name": "אדמה אמריקאית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 328,
    "name": "מגלן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 329,
    "name": "כל הפרחים בפריז",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 330,
    "name": "המרחק בינך לביני",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 331,
    "name": "המיהה שברירית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 332,
    "name": "ברידג'רטון- הדוכס ואני",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 333,
    "name": "כל דבר קטן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 334,
    "name": "התהום הפעורה בנינו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 335,
    "name": "בלתי שבירים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 336,
    "name": "למצוא אותן מתות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 337,
    "name": "כמעט מושלם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 338,
    "name": "תחתוך ותברח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 339,
    "name": "ההתחחיבות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 340,
    "name": "מספרי המוות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 341,
    "name": "יום אחד תפסיד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 342,
    "name": "נעדרים קרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 343,
    "name": "הנמלטת האחורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 344,
    "name": "הנוסע",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 345,
    "name": "הירושה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 346,
    "name": "איידהו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 347,
    "name": "פריטת מיתרי הלב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 348,
    "name": "זרות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 349,
    "name": "סוד העננים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 350,
    "name": "הטיול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 351,
    "name": "כמו ריקוד אבק",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 352,
    "name": "אמנית החינה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 353,
    "name": "מכתבים מלוכלכים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 354,
    "name": "הילדות האבודות של פריז",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 355,
    "name": "חטיפה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 356,
    "name": "אם כבר מדברים על זה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 357,
    "name": "האיש שלמו בווהאן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 358,
    "name": "אחות הצלילים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 359,
    "name": "התעוררות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 360,
    "name": "אחות הפנינים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 361,
    "name": "הבית ההולנדי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 362,
    "name": "בשירות המוסד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 363,
    "name": "שיחה לא מזוהה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 364,
    "name": "התמימים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 365,
    "name": "האי שלא יתואר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 366,
    "name": "להילחם בפיתוי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 367,
    "name": "גמביט המלכה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 368,
    "name": "חיי השקר של המבוגר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 369,
    "name": "הסוםרת מאושווויץ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 370,
    "name": "כניעה מתוקה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 371,
    "name": "לילה ארוך בפריז",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 372,
    "name": "אל תשקר לי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 373,
    "name": "אנחנו נגדכם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 374,
    "name": "ילד בולע יקום",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 375,
    "name": "אן מאבונלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 376,
    "name": "פלא",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 377,
    "name": "הארי פוטר שנה ג",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 378,
    "name": "הרומן המצרי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 379,
    "name": "מכתבים לתיאו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 380,
    "name": "פוליאנה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 381,
    "name": "הסיפור שאינו נגמר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 382,
    "name": "הילד הטוסקני",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 383,
    "name": "המטרה מקדשת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 384,
    "name": "בנערה בציור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 385,
    "name": "המושבעים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 386,
    "name": "האישה בזהב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 387,
    "name": "הסוד האחרון של איימי סנואו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 388,
    "name": "עידן האור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 389,
    "name": "הוכחה אדומה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 390,
    "name": "האי של נשות הים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 391,
    "name": "זוהר כמו גן עדן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 392,
    "name": "הבעל של שתינו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 393,
    "name": "תליון אבן הירקן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 394,
    "name": "ברית דמים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 395,
    "name": "תא לחץ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 396,
    "name": "הסערה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 397,
    "name": "התאונה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 398,
    "name": "הכדור השלישי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 399,
    "name": "הכלה המתחזה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 400,
    "name": "המצאת הכנפיים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 401,
    "name": "הקרבות האבודים של לאונרדו ומיכאנגלו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 402,
    "name": "בת ברית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 403,
    "name": "בוגד משלנו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 404,
    "name": "בת העשן והעצם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 405,
    "name": "כנגד כל האויבים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 406,
    "name": "המלכה היחפה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 407,
    "name": "פרויקט אליס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 408,
    "name": "מגילת זכויות הירח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 409,
    "name": "כשהגלים מתחזקים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 410,
    "name": "כביש מספר 1",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 411,
    "name": "דיקטטור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 412,
    "name": "אסייתים עשירים מטורפים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 413,
    "name": "הרולטה של דה נירו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 414,
    "name": "100 חורפים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 415,
    "name": "מי אלמה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 416,
    "name": "המתיקות שבפיתוי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 417,
    "name": "להתנגד לפיתוי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 418,
    "name": "דמדומים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 419,
    "name": "מולד הירח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 420,
    "name": "ליקוי חמה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 421,
    "name": "שחר מפציע",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 422,
    "name": "וירג'ין ריבר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 423,
    "name": "ברידג'רטון הוויקונט שאהב אותי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 424,
    "name": "בית הפגודה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 425,
    "name": "גבר נכנס בפרדס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 426,
    "name": "אחד ועוד אחד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 427,
    "name": "כבר לא זרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 428,
    "name": "להתנגד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 429,
    "name": "לחשוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 430,
    "name": "רשימת המוזמנים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 431,
    "name": "להשביע את הדרכון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 432,
    "name": "הקנוניה נגד אמריקה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 433,
    "name": "מי שהייתי פעם",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 434,
    "name": "האלמנה השחורנ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 435,
    "name": "תנו לי להסביר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 436,
    "name": "חסד ספרדי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 437,
    "name": "פנינת המזרח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 438,
    "name": "משחקי הכס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 439,
    "name": "הסוכן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 440,
    "name": "צוערים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 441,
    "name": "התחאורמה של התוכי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 442,
    "name": "שתיקה פרסית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 443,
    "name": "ילד 44",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 444,
    "name": "לתפוס רוצח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 445,
    "name": "גדר חיה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 446,
    "name": "עורבני חקיין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 447,
    "name": "נתלקחות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 448,
    "name": "משחקי הרעב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 449,
    "name": "בחורות כמונו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 450,
    "name": "אחות השמש",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 451,
    "name": "איתו זה נגמר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 452,
    "name": "הנשים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 453,
    "name": "כובעים של זכוכית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 454,
    "name": "מרשעת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 455,
    "name": "דם במים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 456,
    "name": "להבות הגורל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 457,
    "name": "חנה סנש",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 458,
    "name": "בישופ",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 459,
    "name": "מוות על הדנה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 460,
    "name": "הכחול שבעינייך",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 461,
    "name": "מלכה בפיננסים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 462,
    "name": "ארבע הרוחות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 463,
    "name": "במקרה הלא סביר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 464,
    "name": "מוות שימושי מאוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 465,
    "name": "דקה לחצות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 466,
    "name": "אבני הלב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 467,
    "name": "הבהוב באפלה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 468,
    "name": "פורעת חוק",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 469,
    "name": "רילוקשיין",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 470,
    "name": "מופוואדאת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 471,
    "name": "הרכבת האחרונה ללונדון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 472,
    "name": "מעשה בלב שבור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 473,
    "name": "שבת שבעה באוקטובר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 474,
    "name": "הרצוג",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 475,
    "name": "משחקי הרעב בלדה לנחשים וציפורי שיר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 476,
    "name": "סניור ונטורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 477,
    "name": "לוקו ונטורה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 478,
    "name": "התרסקות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 479,
    "name": "זיכרונות אחרי מותי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 480,
    "name": "החטוף",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 481,
    "name": "החיים הם רק תקופה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 482,
    "name": "החיים הם תקופה קשה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 483,
    "name": "אבא בא",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 484,
    "name": "מבוא לניצחון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 485,
    "name": "פאוורלס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 486,
    "name": "התנפצות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 487,
    "name": "הנשים של לואיזיאנה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 488,
    "name": "מועדון בריאר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 489,
    "name": "בדרך לאדינבורו",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 490,
    "name": "החיה שבפנים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 491,
    "name": "היפה מכולן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 492,
    "name": "אורסולה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 493,
    "name": "אדונית הרשה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 494,
    "name": "האלכימאי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 495,
    "name": "בנתיב הפלא",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 496,
    "name": "הפינה השקטה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 497,
    "name": "המסע אל החופש",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 498,
    "name": "אהבה עיקשת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 499,
    "name": "פרוייקט מלכה אדומה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 500,
    "name": "לב רעב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 501,
    "name": "שום דבר אינו שחור",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 502,
    "name": "שדות הלב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 503,
    "name": "ירנה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 504,
    "name": "החדרנית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 505,
    "name": "אחות הירח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 506,
    "name": "בשבילה גיבורים עפים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 507,
    "name": "ההיסטוריה של המחר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 508,
    "name": "לאהוב את החיים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 509,
    "name": "עמוק בעזה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 510,
    "name": "הייתם קהל נפלא",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 511,
    "name": "סיבוב המפתח",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 512,
    "name": "חמש אצבעות על היעד - חלק א",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 513,
    "name": "חמש אצבעות על היעד - חלק ב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 514,
    "name": "המסע לגן עדן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 515,
    "name": "משחק קבוצתי - חלק א",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 516,
    "name": "שבויה במשימה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 517,
    "name": "גן הלבנדר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 518,
    "name": "פיוריר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 519,
    "name": "משדר מלחמה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 520,
    "name": "לוותר על הכול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 521,
    "name": "להתגבר על הכול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 522,
    "name": "738 ימים בשבי החמאס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 523,
    "name": "למלוך על הכל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 524,
    "name": "בנות הספיר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 525,
    "name": "לסלוך על הכל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 526,
    "name": "לשלות על הכל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 527,
    "name": "להיאבק על הכל",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 528,
    "name": "להילחם על הכול",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 529,
    "name": "חנות השמלות של גברת שלטון",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 530,
    "name": "האקרית",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 531,
    "name": "המעצבת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 532,
    "name": "להתאהב ולהישאר בחיים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 533,
    "name": "העיקר לקום לבוקר חדש",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 534,
    "name": "מאומד מדי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 535,
    "name": "כשנראה אותך שוב",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 536,
    "name": "ברדגרטון לסר פיליפ באהבה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 537,
    "name": "חוטים שקופים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 538,
    "name": "0.27013888888888887",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 539,
    "name": "איש המוסד בלב טהרן",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 540,
    "name": "little women",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 541,
    "name": "בית המרגלים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 542,
    "name": "מרים גבה",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 543,
    "name": "הופלס",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 544,
    "name": "הבלשים משוק הרוחות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 545,
    "name": "ארמון הנייר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 546,
    "name": "הספר האדום",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 547,
    "name": "הציידת",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 548,
    "name": "נשמות",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 549,
    "name": "הבציר האבוד",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 550,
    "name": "מישהו מסתכל אליך",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 551,
    "name": "מעבר לספק סביר",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 552,
    "name": "ילדת הפרפרים",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  },
  {
    "index": 553,
    "name": "הדרקון הראשון שלי",
    "style": "",
    "author": "",
    "publisher": "",
    "imageUrl": "../Images/cover_not_found.jpg"
  }
];
