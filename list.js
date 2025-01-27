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
}
];
