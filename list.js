const courses = [
    {
        id: 3,
        name: "مبانی نقشه",
        code: "21_7707070",
        prof: "دکتر پیله فروشها",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده     ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 5,
        name: "ع مبانی نقشه",
        code: "21_7707071",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 3.5}
        ],
        examDate: "تعیین نشده ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 6,
        name: "ع مبانی نقشه",
        code: "22_7707071",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 9, duration: 6}
        ],
        examDate: "تعیین نشده ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 7,
        name: "مصالح ساختمانی",
        code: "21_7707072",
        prof: "دکتر باقری",
        units: 2,
        sessions: [
            {days: [1], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 8,
        name: "زیرسازی روسازی راه",
        code: "21_7707075",
        prof: "دکتر خدادادی",
        units: 2,
        sessions: [
            {days: [4], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 9,
        name: "روش اجرای ساختمان",
        code: "21_7707076",
        prof: "اساتید آموزشی",
        units: 2,
        sessions: [
            {days: [5], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 10,
        name: "تئوری برآورد",
        code: "21_7707078",
        prof: "دکتر مشهدی",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 11,
        name: "ژئودزی هندسی",
        code: "21_7707081",
        prof: "دکتر علیزاده",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 12,
        name: "نقشه برداری ژئوتیک",
        code: "21_7707084",
        prof: "دکتر وثوقی",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [5], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 13,
        name: "هیدروگرافی",
        code: "21_7707086",
        prof: "دکتر جزیرئیان",
        units: 2,
        sessions: [
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/27",
        department: "مهندسي نقشه برداري"
    },
    
    {
        id: 16,
        name: "مبانی فتوگرامتری",
        code: "21_۷۷۰۷۰۸۷",
        prof: "دکتر مختارزاده",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5},
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 17,
        name: "ع مبانی فتوگرامتری",
        code: "21_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 18,
        name: "ع مبانی فتوگرامتری",
        code: "22_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده        ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 40,
        name: "ع مبانی فتوگرامتری",
        code: "23_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین نشده          ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 19,
        name: "ع مبانی فتوگرامتری",
        code: "25_۷۷۰۷۰۸۸",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [5], start: 7.5, duration: 1.5}
        ],
        examDate:  "تعیین   نشده",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 20,
        name: "کاربرد فتوگرامتري",
        code: "21_۷۷۰۷۰۹۰",
        prof: "دکتر عبادی",
        units: 3,
        sessions: [
            {days: [2], start: 15, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 21,
        name: "ع کاربرد فتوگرامتري",
        code: "21_۷۷۰۷۰۹۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین  نشده  ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 22,
        name: "ع کاربرد فتوگرامتري",
        code: "22_۷۷۰۷۰۹۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate:  "تعیین    نشده   ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 23,
        name: "ع سنجش از دور",
        code: "21_۷۷۰۷۰۹۴",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate:  "تعیین    نشده    ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 24,
        name: "ع سنجش از دور",
        code: "22_۷۷۰۷۰۹۴",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین     نشده     ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 25,
        name: "تحليل هاي مكاني",
        code: "21_۷۷۰۷۱۰۰",
        prof: "دکتر ملک",
        units: 2,
        sessions: [
            {days: [2], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 26,
        name: "ع تحليل هاي مكاني",
        code: "21_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5}
        ],
        examDate:  "تعیین      نشده      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 66,
        name: "ع تحليل هاي مكاني",
        code: "22_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [1], start: 9, duration: 1.5}
        ],
        examDate:  "  تعیین     نشده" ,
        department: "مهندسي نقشه برداري"
    },
    {
        id: 27,
        name: "ع تحليل هاي مكاني",
        code: "23_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate:  "تعیین    نشده‌      ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 28,
        name: "ع تحليل هاي مكاني",
        code: "24_۷۷۰۷۱۰۱",
        prof: "اساتید آموزشی",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate:  "تعیین  نشده    ",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 29,
        name: "حد نگاری",
        code: "21_۷۷۰۷۱۰۲",
        prof: "دکتر مسگری",
        units: 1,
        sessions: [
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 30,
        name: "مديريت پروژه",
        code: "21_۷۷۰۷۱۰۳",
        prof: "دکتر کریمی",
        units: 2,
        sessions: [
            {days: [3], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 31,
        name: "کاربرد سيستم اطلاعات مكاني",
        code: "21_۷۷۰۷۱۰۵",
        prof: "دکتر آل شیخ",
        units: 2,
        sessions: [
            {days: [2], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 32,
        name: "آمايش سرزمين",
        code: "21_۷۷۰۷۱۰۷",
        prof: "اساتید آموزشی",
        units: 2,
        sessions: [
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 33,
        name: "فتوگرامتري برد  ",
        code: "21_۷۷۰۷۱۱۲",
        prof: "اساتید آموزشی",
        units: 3,
        sessions: [
            {days: [1], start: 7.5, duration: 1.5},
            {days: [4], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 34,
        name: "كاربردسنجش ازدور ",
        code: "21_۷۷۰۷۱۱۳",
        prof: "دکتر خصالی",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 35,
        name: "ميكروژئودزي",
        code: "21_۷۷۰۷۱۱۵",
        prof: "دکتر وثوقی",
        units: 2,
        sessions: [
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسي نقشه برداري"
    },
    {
        id: 36,
        name: "جزر و مد",
        code: "21_۷۷۰۷۱۱۸",
        prof: "دکتر جزیرئیان",
        units: 2,
        sessions: [
            {days: [2], start: 10.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسي نقشه برداري"
    },

// فیزیک
{
    id: 14,
    name: "فیزیک عمومی 2",
    code: "41_4210040",
    prof: "دکتر رادین",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},
{
    id: 15,
    name: "فیزیک عمومی 2",
    code: "42_4210040",
    prof: "دکتر حاتمی",
    units: 3,
    sessions: [
        {days: [2], start: 9, duration: 1.5},
        {days: [5], start: 9, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "فيزيك"
},

// مهندسی برق


    {
        id: 70,
        name: "ریاضیات مهندسی",
        code: "11_1110001",
        prof: "شاملی محمدعلی",
        units: 3,
        sessions: [
            {days: [6], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 71,
        name: "مدارهای الکتریکی ۱",
        code: "11_1110136",
        prof: "شمسی حسین",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسی برق"
    },
    {
        id: 72,
        name: "مدارهای الکتریکی ۱",
        code: "12_1110136",
        prof: "کیوان فرد فرزانه",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/03/28",
        department: "مهندسی برق"
    },
    {
        id: 73,
        name: "معادلات دیفرانسیل",
        code: "11_1110203",
        prof: "نکویی",
        units: 3,
        sessions: [
            {days: [1], start: 7.5, duration: 1.5},
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی برق"
    },
    {
        id: 74,
        name: "معادلات دیفرانسیل",
        code: "12_1110203",
        prof: "خادم علی",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی برق"
    },
    {
        id: 75,
        name: "محاسبات عددی",
        code: "11_1110234",
        prof: "نیکوفرد امیرحسین",
        units: 2,
        sessions: [
            {days: [6], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسی برق"
    },
    {
        id: 76,
        name: "سیستم‌های دیجیتال ۱",
        code: "11_1110239",
        prof: "یارمند",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 77,
        name: "سیستم‌های دیجیتال ۱",
        code: "12_1110239",
        prof: "یارمند",
        units: 3,
        sessions: [
            {days: [1], start: 15, duration: 1.5},
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 78,
        name: "سیستم‌های دیجیتال ۱",
        code: "13_1110239",
        prof: "دلیر روی فرد رسول",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی برق"
    },
    {
        id: 79,
        name: "سیستم‌های دیجیتال ۲",
        code: "11_1110240",
        prof: "دلیر روی فرد رسول",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 80,
        name: "سیستم‌های دیجیتال ۲",
        code: "13_1110240",
        prof: "خان کلانتری رکن آبادی سعید",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی برق"
    },
    {
        id: 81,
        name: "مدارهای الکتریکی ۲",
        code: "11_1110241",
        prof: "دلیر روی فرد رسول",
        units: 2,
        sessions: [
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/02",
        department: "مهندسی برق"
    },
    {
        id: 82,
        name: "مدارهای الکتریکی ۲",
        code: "12_1110241",
        prof: "دلیر روی فرد رسول",
        units: 2,
        sessions: [
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/02",
        department: "مهندسی برق"
    },
    {
        id: 83,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "11_1110256",
        prof: "جمشیدی",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 84,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "12_1110256",
        prof: "محبی آشتیانی مریم",
        units: 3,
        sessions: [
            {days: [2], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 85,
        name: "سیگنال‌ها و سیستم‌ها",
        code: "13_1110256",
        prof: "حیرانی نوبری جعفر",
        units: 3,
        sessions: [
            {days: [1], start: 7.5, duration: 1.5},
            {days: [3], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی برق"
    },
    {
        id: 86,
        name: "الکترومغناطیس مهندسی",
        code: "11_1110258",
        prof: "قطان کاشانی زهرا",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/26",
        department: "مهندسی برق"
    },
    {
        id: 87,
        name: "الکترونیک ۱",
        code: "11_1110259",
        prof: "احسانیان مفرد مهدی",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/25",
        department: "مهندسی برق"
    },
    {
        id: 88,
        name: "الکترونیک ۲",
        code: "11_1110260",
        prof: "ندیمی ابراهیم",
        units: 3,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 89,
        name: "الکترونیک ۲",
        code: "12_1110260",
        prof: "زندی حسام",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [4], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 90,
        name: "الکترونیک ۲",
        code: "13_1110260",
        prof: "کولیوند یاراله",
        units: 3,
        sessions: [
            {days: [6], start: 13.5, duration: 1.5},
            {days: [4], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 91,
        name: "احتمال مهندسی",
        code: "11_1110261",
        prof: "حبیبی بسطامی علی",
        units: 3,
        sessions: [
            {days: [1], start: 10.5, duration: 2},
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    },
    {
        id: 92,
        name: "احتمال مهندسی",
        code: "12_1110261",
        prof: "اخباری بهاره",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    },
    {
        id: 93,
        name: "برنامه‌نویسی کامپیوتر",
        code: "11_1110262",
        prof: "خان کلانتری رکن آبادی سعید",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسی برق"
    },
    {
        id: 94,
        name: "برنامه‌نویسی کامپیوتر",
        code: "12_1110262",
        prof: "نوید نادری",
        units: 3,
        sessions: [
            {days: [2], start: 15, duration: 1.5},
            {days: [4], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/09",
        department: "مهندسی برق"
    },
    {
        id: 95,
        name: "مبانی بیوالکتریک",
        code: "11_1110280",
        prof: "ولی منصور",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/25",
        department: "مهندسی برق"
    },
    {
        id: 96,
        name: "سیستم‌های رادیولوژی و تصویرگر پزشکی",
        code: "11_1110284",
        prof: "خادم علی",
        units: 2,
        sessions: [
            {days: [2], start: 9, duration: 1.5},
            {days: [4], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی برق"
    },
    {
        id: 97,
        name: "هوش مصنوعی مقدماتی",
        code: "11_1110289",
        prof: "علیاری شوره دلی مهدی",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی برق"
    }
,

// مهندسی کمپیوتر

    {
        id: 98,
        name: "الکترونیک دیجیتال و طراحی مدارهای مجتمع پر تراکم",
        code: "19_1910020",
        prof: "صیفوری",
        units: 3,
        sessions: [
            {days: [6], start: 7.5, duration: 1.5},
            {days: [2], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 99,
        name: "نظریه و الگوریتم‌های گراف",
        code: "19_1910022",
        prof: "شهسواری",
        units: 3,
        sessions: [
            {days: [2], start: 7.5, duration: 1.5},
            {days: [4], start: 7.5, duration: 1.5}
        ],
        examDate: "1404/04/04",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 100,
        name: "شبکه‌های کامپیوتری ۱",
        code: "19_1910023",
        prof: "مرادیان",
        units: 3,
        sessions: [
            {days: [1], start: 9, duration: 1.5},
            {days: [3], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 101,
        name: "شبکه‌های کامپیوتری ۲",
        code: "19_1910024",
        prof: "یعقوبی کعبه",
        units: 3,
        sessions: [
            {days: [6], start: 15, duration: 1.5},
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 102,
        name: "آمار و احتمالات مهندسی",
        code: "19_1910029",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [
            {days: [1], start: 15.5, duration: 2},
            {days: [3], start: 15.5, duration: 2}
        ],
        examDate: "1404/04/04",
        department: "مهندسی کامپیوتر"
    },
    {
        id: 103,
        name: "زبان تخصصی",
        code: "19_1910039",
        prof: "یعقوبی کعبه",
        units: 2,
        sessions: [
            {days: [6], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/02",
        department: "مهندسی کامپیوتر"
    }
,

// عمران


    {
        id: 104,
        name: "اقتصاد مهندسی",
        code: "21_2220084",
        prof: "دهقانی سانیج محمدسعید",
        units: 2,
        sessions: [
            {days: [1], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/01",
        department: "مهندسی عمران"
    },
    {
        id: 105,
        name: "بازرسی، تعمیر و ترمیم سازه‌ها",
        code: "21_2220097",
        prof: "بهشتی اول سید بهرام",
        units: 2,
        sessions: [
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 106,
        name: "اصول مهندسی زلزله و باد",
        code: "21_2220098",
        prof: "مشایخی محمدرضا، ذوالفقاری محمدرضا",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 107,
        name: "محاسبات عددی",
        code: "21_2220110",
        prof: "اسدی رزا",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 108,
        name: "محاسبات عددی",
        code: "22_2220110",
        prof: "ایزدی اردلان",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 109,
        name: "کارآموزی",
        code: "21_2220114",
        prof: "اساتید گروه آموزشی",
        units: 1,
        sessions: [],
        examDate: "",
        department: "مهندسی عمران"
    },
    {
        id: 110,
        name: "مقررات ملی ساختمان",
        code: "21_2220116",
        prof: "صباغ یزدی سعیدرضا",
        units: 2,
        sessions: [
            {days: [2], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 111,
        name: "پروژه تخصصی",
        code: "21_2220121",
        prof: "اساتید گروه آموزشی",
        units: 3,
        sessions: [],
        examDate: "",
        department: "مهندسی عمران"
    },
    {
        id: 112,
        name: "اصول مدیریت ساخت",
        code: "21_2220163",
        prof: "علیپوری یعقوب",
        units: 2,
        sessions: [
            {days: [3], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی عمران"
    },
    {
        id: 113,
        name: "هوش مصنوعی و تحول دیجیتال",
        code: "21_2220171",
        prof: "قاسم زاده حسن",
        units: 2,
        sessions: [
            {days: [6], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/03/25",
        department: "مهندسی عمران"
    },
    {
        id: 114,
        name: "برنامه‌سازی کامپیوتر",
        code: "21_2220173",
        prof: "صادقی نعیمه",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 115,
        name: "برنامه‌سازی کامپیوتر",
        code: "22_2220173",
        prof: "صادقی نعیمه",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 116,
        name: "برنامه‌سازی کامپیوتر",
        code: "23_2220173",
        prof: "خدادادی مجتبی",
        units: 3,
        sessions: [
            {days: [6], start: 9, duration: 1.5},
            {days: [2], start: 9, duration: 1.5}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 117,
        name: "برنامه‌سازی کامپیوتر",
        code: "24_2220173",
        prof: "خدادادی مجتبی",
        units: 3,
        sessions: [
            {days: [6], start: 10.5, duration: 2},
            {days: [2], start: 10.5, duration: 2}
        ],
        examDate: "1404/04/07",
        department: "مهندسی عمران"
    },
    {
        id: 118,
        name: "مبانی معماری و شهرسازی",
        code: "21_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 119,
        name: "مبانی معماری و شهرسازی",
        code: "22_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 120,
        name: "مبانی معماری و شهرسازی",
        code: "23_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 13.5, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 121,
        name: "مبانی معماری و شهرسازی",
        code: "24_2220177",
        prof: "اساتید گروه آموزشی",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 122,
        name: "اصول مهندسی منابع آب",
        code: "21_2220204",
        prof: "موسوی سید مرتضی",
        units: 2,
        sessions: [
            {days: [6], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/03",
        department: "مهندسی عمران"
    },
    {
        id: 122,
        name: "تغییر اقلیم",
        code: "21_2220205",
        prof: "اسدی رزا",
        units: 2,
        sessions: [
            {days: [3], start: 15, duration: 1.5}
        ],
        examDate: "1404/04/08",
        department: "مهندسی عمران"
    },
    {
        id: 123,
        name: "اصول ایمنی در ساختمان و حفاظت آتش سوزی",
        code: "21_2220223",
        prof: "احمدیار",
        units: 2,
        sessions: [
            {days: [1], start: 10.5, duration: 2}
        ],
        examDate: "1404/03/31",
        department: "مهندسی عمران"
    },

// هوافضا
// Continuing the courses array...
{
    id: 124,
    name: "آز مکانیک سیالات",
    code: "81_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 7.5, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 125,
    name: "آز مکانیک سیالات",
    code: "82_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 9, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 126,
    name: "آز مکانیک سیالات",
    code: "83_8880036",
    prof: "شیخ الاسلام نوری سید مهدی",
    units: 1,
    sessions: [
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 127,
    name: "طراحی اجزاء ۱",
    code: "81_8880037",
    prof: "مظفری علی",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 128,
    name: "طراحی اجزاء ۱",
    code: "82_8880037",
    prof: "ذاکری مهناز",
    units: 3,
    sessions: [
        {days: [3], start: 7.5, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 129,
    name: "آز مقاومت مصالح",
    code: "81_8880038",
    prof: "ذاکری مهناز",
    units: 1,
    sessions: [
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 130,
    name: "آز مقاومت مصالح",
    code: "82_8880038",
    prof: "اساتید گروه آموزشی",
    units: 1,
    sessions: [
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 131,
    name: "تحلیل سازه‌های هوایی",
    code: "81_8880040",
    prof: "خراسانی رضا",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی هوافضا"
},
{
    id: 132,
    name: "آز آئرودینامیک ۱",
    code: "81_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 133,
    name: "آز آئرودینامیک ۱",
    code: "82_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 10.5, duration: 2}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 134,
    name: "آز آئرودینامیک ۱",
    code: "83_8880047",
    prof: "پوریوسفی غلامحسین",
    units: 1,
    sessions: [
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "",
    department: "مهندسی هوافضا"
},
{
    id: 135,
    name: "زبان تخصصی مهندسی هوافضا",
    code: "81_8880050",
    prof: "واحدی",
    units: 2,
    sessions: [
        {days: [6], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 136,
    name: "زبان تخصصی مهندسی هوافضا",
    code: "82_8880050",
    prof: "واحدی",
    units: 2,
    sessions: [
        {days: [6], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی هوافضا"
},
{
    id: 137,
    name: "محاسبات عددی",
    code: "81_8880059",
    prof: "پوریوسفی غلامحسین",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 138,
    name: "محاسبات عددی",
    code: "82_8880059",
    prof: "اساتید گروه آموزشی",
    units: 2,
    sessions: [
        {days: [3], start: 15, duration: 2}
    ],
    examDate: "1404/03/27",
    department: "مهندسی هوافضا"
},
{
    id: 139,
    name: "مکانیک پرواز ۱",
    code: "81_8880060",
    prof: "نیکخواه امیرعلی",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [3], start: 10.5, duration: 2}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 140,
    name: "مکانیک پرواز ۱",
    code: "82_8880060",
    prof: "خوشنود عبدالمجید",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [4], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/03/28",
    department: "مهندسی هوافضا"
},
{
    id: 141,
    name: "ترمودینامیک ۲",
    code: "81_8880067",
    prof: "مهدوی مقدم حسین",
    units: 2,
    sessions: [
        {days: [6], start: 15, duration: 2}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},
{
    id: 142,
    name: "آئرودینامیک ۲",
    code: "81_8880082",
    prof: "فتحعلی مانی",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی هوافضا"
},

// مکانیک
{
    id: 143,
    name: "زبان تخصصی",
    code: "31_3330016",
    prof: "نحوی علی",
    units: 2,
    sessions: [
        {days: [1], start: 15, duration: 1.5}
    ],
    examDate: "1404/03/26",
    department: "مهندسی مکانیک"
},
{
    id: 144,
    name: "پروژه",
    code: "31_3330017",
    prof: "اساتید گروه آموزشی",
    units: 3,
    sessions: [],
    examDate: "",
    department: "مهندسی مکانیک"
},
{
    id: 145,
    name: "برنامه‌سازی کامپیوتر",
    code: "31_3330039",
    prof: "کازرونی مهرداد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 146,
    name: "برنامه‌سازی کامپیوتر",
    code: "32_3330039",
    prof: "ستاری امیرمحمد",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 147,
    name: "محاسبات عددی",
    code: "31_3330040",
    prof: "ساداتی سیدحسین",
    units: 2,
    sessions: [
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 148,
    name: "محاسبات عددی",
    code: "32_3330040",
    prof: "لسانی",
    units: 2,
    sessions: [
        {days: [4], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 149,
    name: "مبانی مهندسی برق ۱",
    code: "31_3330041",
    prof: "اکبری",
    units: 3,
    sessions: [
        {days: [1], start: 16.5, duration: 1.5},
        {days: [3], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 150,
    name: "مبانی مهندسی برق ۲",
    code: "31_3330042",
    prof: "علیزاده",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 151,
    name: "مبانی مهندسی برق ۲",
    code: "32_3330042",
    prof: "اکبری",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 152,
    name: "آز مبانی مهندسی برق",
    code: "31_3330043",
    prof: "عباس زاده کریم",
    units: 1,
    sessions: [
        {days: [3], start: 13.5, duration: 2}
    ],
    examDate: "",
    department: "مهندسی مکانیک"
},
{
    id: 153,
    name: "آز مبانی مهندسی برق",
    code: "32_3330043",
    prof: "عباس زاده کریم",
    units: 1,
    sessions: [
        {days: [3], start: 15.5, duration: 2}
    ],
    examDate: "",
    department: "مهندسی مکانیک"
},
{
    id: 154,
    name: "کنترل مدرن",
    code: "31_3330051",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 16.5, duration: 1.5},
        {days: [2], start: 16.5, duration: 1.5}
    ],
    examDate: "1404/04/01",
    department: "مهندسی مکانیک"
},
{
    id: 155,
    name: "دینامیک خودرو",
    code: "31_3330056",
    prof: "آزادی شهرام",
    units: 3,
    sessions: [
        {days: [6], start: 10.5, duration: 2},
        {days: [2], start: 10.5, duration: 2}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 156,
    name: "هیدرولیک و پنوماتیک",
    code: "31_3330058",
    prof: "تقوی پور امیر",
    units: 3,
    sessions: [
        {days: [6], start: 15, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
},
// Continuing the courses array...
{
    id: 157,
    name: "طراحی مکانیزم‌ها",
    code: "31_3330059",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 158,
    name: "مقدمه‌ای بر اجزاء محدود",
    code: "31_3330060",
    prof: "صفاری محمدعلی",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 159,
    name: "مقدمه‌ای بر سیستم‌های مکاترونیکی",
    code: "31_3330061",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [6], start: 15, duration: 1.5},
        {days: [2], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
},
{
    id: 160,
    name: "مقدمه‌ای بر مهندسی مکاترونیک",
    code: "31_3330062",
    prof: "نجفی اردکانی علی",
    units: 3,
    sessions: [
        {days: [1], start: 10.5, duration: 1.5},
        {days: [3], start: 10.5, duration: 1.5}
    ],
    examDate: "1404/04/02",
    department: "مهندسی مکانیک"
},
{
    id: 161,
    name: "روش‌های تولید",
    code: "31_3330063",
    prof: "حق پناه محمدرضا",
    units: 3,
    sessions: [
        {days: [1], start: 13.5, duration: 1.5},
        {days: [3], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/03",
    department: "مهندسی مکانیک"
},
{
    id: 162,
    name: "مقدمه‌ای بر CAD/CAM",
    code: "31_3330064",
    prof: "حق پناه محمدرضا",
    units: 3,
    sessions: [
        {days: [1], start: 15, duration: 1.5},
        {days: [3], start: 15, duration: 1.5}
    ],
    examDate: "1404/04/04",
    department: "مهندسی مکانیک"
},
{
    id: 163,
    name: "مقدمه‌ای بر رباتیک",
    code: "31_3330065",
    prof: "آزادی شهرام",
    units: 3,
    sessions: [
        {days: [6], start: 13.5, duration: 1.5},
        {days: [2], start: 13.5, duration: 1.5}
    ],
    examDate: "1404/04/08",
    department: "مهندسی مکانیک"
},
{
    id: 164,
    name: "مقدمه‌ای بر مهندسی پزشکی",
    code: "31_3330066",
    prof: "فرزانه حسن",
    units: 3,
    sessions: [
        {days: [1], start: 9, duration: 1.5},
        {days: [3], start: 9, duration: 1.5}
    ],
    examDate: "1404/04/09",
    department: "مهندسی مکانیک"
}
];

