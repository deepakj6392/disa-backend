"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SURVEY_QUESTIONS = exports.DEFAULT_QUESTIONS = exports.DEFAULT_VISIT = exports.DEFAULT_STORES = exports.DEFAULT_SKUS = exports.DEFAULT_STORE_FORMAT = exports.DEFAULT_RETAIL_CHAIN = exports.DEFAULT_PRODUCT = exports.DEFAULT_SURVEY = exports.DEFAULT_BRAND = void 0;
exports.DEFAULT_BRAND = [
    {
        brandName: "Nivea",
        brandLogo: "nivea-brand.png",
    }
];
exports.DEFAULT_SURVEY = [
    {
        surveyBrandId: 1,
        surveyStartDate: "01-10-2024",
        surveyEndDate: "31-12-2024",
    }
];
exports.DEFAULT_PRODUCT = [
    {
        productName: "Skin Firming Body Lotion",
        productCategory: "Skin Care"
    }
];
exports.DEFAULT_RETAIL_CHAIN = [
    {
        retailChain: "Lulu"
    },
    {
        retailChain: "Carrefour"
    },
    {
        retailChain: "AI Madina"
    },
    {
        retailChain: "Nesto"
    },
    {
        retailChain: "Spinneys"
    },
    {
        retailChain: "Almaya"
    },
    {
        retailChain: "Choithrams"
    },
    {
        retailChain: "Life"
    },
    {
        retailChain: "Aster"
    },
    {
        retailChain: "Bin Sina"
    },
    {
        retailChain: "Medicina"
    },
    {
        retailChain: "MedX"
    }
];
exports.DEFAULT_STORE_FORMAT = [
    {
        storeFormat: "Hyper"
    },
    {
        storeFormat: "Super"
    },
    {
        storeFormat: "Pharmacy"
    }
];
exports.DEFAULT_SKUS = [
    {
        productId: 1,
        skuName: "Skin Firming Nourishing Hydration Body Lotion",
        skuGrammage: "400 ml",
        skuFullName: "Skin Firming Nourishing Hydration 400 ml Body Lotion",
        skuImage: "nourishing-hydration.jpg",
    },
    {
        productId: 1,
        skuName: "Skin Firming Sheer Hydration Body Lotion",
        skuGrammage: "400 ml",
        skuFullName: "Skin Firming Sheer Hydration 400 ml Body Lotion",
        skuImage: "sheer-hydration.jpg",
    },
    {
        productId: 1,
        skuName: "Skin Firming Melanin Beauty and Hydration Body Lotion",
        skuGrammage: "400 ml",
        skuFullName: "Skin Firming Melanin Beauty and Hydration 400 ml Body Lotion",
        skuImage: "melanin-beauty-hydration.jpg",
    }
];
exports.DEFAULT_STORES = [
    {
        storeName: "Lulu Karama",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Karama",
        retailChainId: 1,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Carrefour Marina",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Marina",
        retailChainId: 2,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Carrefour Barsha",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Barsha",
        retailChainId: 2,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Carrefour Jumeira",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Jumeira",
        retailChainId: 2,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Lulu Festival City",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Festival City",
        retailChainId: 1,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Carrefour AI Ghurair",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "AI Ghurair",
        retailChainId: 2,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "AI Madina AI Qusais",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "AI Qusais",
        retailChainId: 4,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "AI Madina AI Quoz",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "AI Quoz",
        retailChainId: 4,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Lulu Greens",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "Greens",
        retailChainId: 1,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Lulu AI Nahda",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "AI Nahda",
        retailChainId: 1,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Nesto AI Mina",
        storePriority: "High",
        storeFormatId: 1,
        storeArea: "AI Mina",
        retailChainId: 5,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Lulu Supercenter JLT",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "JLT",
        retailChainId: 1,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Spinneys Burdubai",
        storePriority: "High",
        storeFormatId: 2,
        storeArea: "Bur Dubai",
        retailChainId: 6,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Almaya Barsha",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Barsha",
        retailChainId: 7,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Spinneys Central Park",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Sheikh Zayed Rd",
        retailChainId: 6,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Spinneys Marina",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Marina",
        retailChainId: 6,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Almaya Deira City",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Deira",
        retailChainId: 7,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Lulu Supercenter Jebel Ali",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Jebel Ali",
        retailChainId: 1,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Choithrams DIP",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "DIP",
        retailChainId: 8,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Almaya Marina",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Marina",
        retailChainId: 7,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Choithrams Mankhool",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Mankhool",
        retailChainId: 8,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Choithrams Greens",
        storePriority: "Medium",
        storeFormatId: 2,
        storeArea: "Greens",
        retailChainId: 8,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Life Pharmacy Marina View",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Marina",
        retailChainId: 9,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Aster Pharmacy Dubai Mall",
        storePriority: "High",
        storeFormatId: 3,
        storeArea: "Dubai Mall",
        retailChainId: 10,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "BinSina Pharmacy Barsha",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Barsha",
        retailChainId: 11,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Medicina Pharmacy Jumeirah",
        storePriority: "High",
        storeFormatId: 3,
        storeArea: "Jumeirah",
        retailChainId: 12,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Aster Pharmacy Bur Dubai",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Bur Dubai",
        retailChainId: 10,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "LIFE Pharmacy - Karama One",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Karama",
        retailChainId: 9,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "MedX Pharmacy Sheikh Zayed Road",
        storePriority: "High",
        storeFormatId: 3,
        storeArea: "Sh Zayed Road",
        retailChainId: 12,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "MedX Pharmacy Dubai Mall",
        storePriority: "High",
        storeFormatId: 3,
        storeArea: "Dubai Mall",
        retailChainId: 12,
        storeType: "Mall Based",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "MedX Pharmacy Al Barsha",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Barsha",
        retailChainId: 12,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Life Pharmacy Greens",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Greens",
        retailChainId: 9,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    },
    {
        storeName: "Aster Pharmacy Marina",
        storePriority: "Medium",
        storeFormatId: 3,
        storeArea: "Marina",
        retailChainId: 10,
        storeType: "Standalone",
        storeAddress: "",
        storeLocation: ""
    }
];
exports.DEFAULT_VISIT = [
    { visitDate: "20-09-2024", surveyId: 1, surveyorId: 1, storeId: 1 },
    { visitDate: "21-09-2024", surveyId: 1, surveyorId: 1, storeId: 2 },
    { visitDate: "22-09-2024", surveyId: 1, surveyorId: 1, storeId: 3 },
    { visitDate: "23-09-2024", surveyId: 1, surveyorId: 1, storeId: 4 },
    { visitDate: "24-09-2024", surveyId: 1, surveyorId: 1, storeId: 5 },
    { visitDate: "25-09-2024", surveyId: 1, surveyorId: 1, storeId: 6 },
    { visitDate: "26-09-2024", surveyId: 1, surveyorId: 1, storeId: 7 },
    { visitDate: "27-09-2024", surveyId: 1, surveyorId: 1, storeId: 8 },
    { visitDate: "28-09-2024", surveyId: 1, surveyorId: 1, storeId: 9 },
    { visitDate: "29-09-2024", surveyId: 1, surveyorId: 1, storeId: 10 },
    { visitDate: "30-09-2024", surveyId: 1, surveyorId: 1, storeId: 11 },
    { visitDate: "01-10-2024", surveyId: 1, surveyorId: 1, storeId: 12 },
    { visitDate: "02-10-2024", surveyId: 1, surveyorId: 1, storeId: 13 },
    { visitDate: "03-10-2024", surveyId: 1, surveyorId: 1, storeId: 14 },
    { visitDate: "04-10-2024", surveyId: 1, surveyorId: 1, storeId: 15 },
    { visitDate: "05-10-2024", surveyId: 1, surveyorId: 1, storeId: 16 },
    { visitDate: "06-10-2024", surveyId: 1, surveyorId: 1, storeId: 17 },
    { visitDate: "07-10-2024", surveyId: 1, surveyorId: 1, storeId: 18 },
    { visitDate: "08-10-2024", surveyId: 1, surveyorId: 1, storeId: 19 },
    { visitDate: "09-10-2024", surveyId: 1, surveyorId: 1, storeId: 20 },
    { visitDate: "10-10-2024", surveyId: 1, surveyorId: 1, storeId: 21 },
    { visitDate: "11-10-2024", surveyId: 1, surveyorId: 1, storeId: 22 },
    { visitDate: "12-10-2024", surveyId: 1, surveyorId: 1, storeId: 23 },
    { visitDate: "13-10-2024", surveyId: 1, surveyorId: 1, storeId: 24 },
    { visitDate: "14-10-2024", surveyId: 1, surveyorId: 1, storeId: 25 },
    { visitDate: "15-10-2024", surveyId: 1, surveyorId: 1, storeId: 26 },
    { visitDate: "16-10-2024", surveyId: 1, surveyorId: 1, storeId: 27 },
    { visitDate: "17-10-2024", surveyId: 1, surveyorId: 1, storeId: 28 },
    { visitDate: "18-10-2024", surveyId: 1, surveyorId: 1, storeId: 29 },
    { visitDate: "19-10-2024", surveyId: 1, surveyorId: 1, storeId: 30 },
    { visitDate: "20-10-2024", surveyId: 1, surveyorId: 1, storeId: 31 },
    { visitDate: "21-10-2024", surveyId: 1, surveyorId: 1, storeId: 32 },
    { visitDate: "22-10-2024", surveyId: 1, surveyorId: 1, storeId: 33 }
];
exports.DEFAULT_QUESTIONS = [
    {
        _id: 1,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "display section",
        description: "What is the name of the section (as displayed in the store) where the below products are placed?",
        questionHint: "",
        screenType: "meter-image",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "free text",
        storeDisplayLocation: "primary"
    },
    {
        _id: 2,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "Overall category size",
        description: "Let's measure the size of the <strong>productCategory</strong> category in this store.",
        questionHint: "Measuring tape should be used for the measurements",
        screenType: "meter",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "number",
        storeDisplayLocation: "primary"
    },
    {
        _id: 3,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "Display alloted",
        description: "Great, Now let's measure the shelf space allocated to the products shown below",
        questionHint: "Measuring tape should be used for the measurements",
        screenType: "meter-image-second",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "number",
        storeDisplayLocation: "primary"
    },
    {
        _id: 4,
        questionCategory: "Primary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Shelf Availability",
        description: "Is the SKU <strong>skuFullName</strong>, shown in the image below, available on the shelf?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "yes/no",
        storeDisplayLocation: "primary"
    },
    {
        _id: 5,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Facings",
        description: "How many facings of <strong>skuFullName</strong> are kept on the shelf?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row. \nDo not count units kept in the back rows",
        screenType: "meter-count",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "number",
        storeDisplayLocation: "primary"
    },
    {
        _id: 6,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Display",
        description: "How many facings of <strong>skuFullName</strong> are kept on the shelf in front of you that you can reach out without bending with straight hand to pick?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row \nDo not count units kept in the back rows",
        screenType: "meter-count",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "number",
        storeDisplayLocation: "primary"
    },
    {
        _id: 7,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "SKU Unplanned Planogram",
        description: "How many facings of <strong>skuFullName</strong> are kept on other shelves for which you have to either bend or raise your hand to pick?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row \nDo not count units kept in the back rows",
        screenType: "meter-count",
        usedForDeviation: "no",
        skuSpecific: "yes",
        responseType: "number",
        storeDisplayLocation: "primary"
    },
    {
        _id: 8,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Wobbler",
        description: "Do you see a <strong>Wobbler</strong> displayed on the shelves in front of you?",
        questionHint: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "no",
        responseType: "yes/no",
        storeDisplayLocation: "primary"
    },
    {
        _id: 9,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Shelf Separator",
        description: "Do you see a <strong>Shelf Separator</strong> displayed on the shelves in front of you?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "no",
        responseType: "yes/no",
        storeDisplayLocation: "primary"
    },
    {
        _id: 10,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Shelf Strip",
        description: "Do you see a <strong>Shelf Strip</strong> displayed on the shelves in front of you?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "no",
        responseType: "yes/no",
        storeDisplayLocation: "primary"
    },
    {
        _id: 11,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        description: "Great JOB !!!<br/>Let's now proceed with the next survey section.",
        screenType: "question-info",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "action",
        storeDisplayLocation: ""
    },
    {
        _id: 12,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Secondary Visibility",
        questionChildCategory: "Secondary Visibility",
        description: "Pls walk around various sections and proceed once you have seen any of sections displayed in the below images.",
        screenType: "gondola-fsu-selection",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "action",
        storeDisplayLocation: ""
    },
    {
        _id: 13,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        description: "OK,<br/>Let's start with the survey of <strong>sectionName</strong>.",
        screenType: "question-info",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "selection",
        storeDisplayLocation: "",
    },
    {
        _id: 14,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola End",
        questionChildCategory: "Gondola Location",
        description: "Please provide the name of section where this <strong>Gondola End</strong> is kept in the store.",
        screenType: "meter-image",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "free text",
        storeDisplayLocation: "gondola",
    },
    {
        _id: 15,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Branding",
        questionChildCategory: "Gondola Branding",
        description: "Is the branding on the <strong>Gondola</strong> same as the one displayed in the below picture?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "no",
        responseType: "yes/no",
        storeDisplayLocation: "gondola",
    },
    {
        _id: 16,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        description: "Is the SKU <strong>skuFullName</strong>, as shown in the image below, available on the Gondola End?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "yes/no",
        storeDisplayLocation: "gondola",
    },
    {
        _id: 17,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        description: "How many facings of <strong>skuFullName</strong> are kept on the Gondola shelves?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row \nDo not count units kept in the back rows",
        screenType: "meter-count",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "number",
        storeDisplayLocation: "gondola",
    },
    {
        _id: 18,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        description: "Is the display of <strong>skuFullName</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row \nDo not count units kept in the back rows",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "yes/no",
        storeDisplayLocation: "gondola",
    },
    {
        _id: 19,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU",
        questionChildCategory: "FSU Location",
        description: "Please provide the name of section where this <strong>FSU</strong> is kept in the store.",
        screenType: "meter-image",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "free text",
        storeDisplayLocation: "fsu",
    },
    {
        _id: 20,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Branding",
        questionChildCategory: "FSU Branding",
        description: "Is the branding on the <strong>FSU</strong> same as the one displayed in the below picture?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "no",
        responseType: "yes/no",
        storeDisplayLocation: "fsu",
    },
    {
        _id: 21,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        description: "Is the SKU <strong>skuFullName</strong>, as shown in the image below, available on the FSU?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "yes/no",
        storeDisplayLocation: "fsu",
    },
    {
        _id: 22,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        description: "How many facings of <strong>skuFullName</strong> are kept on the FSU shelves?",
        questionHint: "Facings are the number of units of the SKUs displayed on the front row \nDo not count units kept in the back rows",
        screenType: "meter-count",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "number",
        storeDisplayLocation: "fsu",
    },
    {
        _id: 23,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        description: "Is the display of <strong>skuFullName</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes",
        skuSpecific: "yes",
        responseType: "yes/no",
        storeDisplayLocation: "fsu",
    },
    {
        _id: 24,
        questionCategory: "general information",
        questionSubCategory: "general information",
        questionChildCategory: "general information",
        description: "Thank You,<br/> You have successfully completed the survey",
        screenType: "question-complete",
        usedForDeviation: "no",
        skuSpecific: "no",
        responseType: "action"
    }
];
exports.DEFAULT_SURVEY_QUESTIONS = [
    {
        _id: 1,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 1,
        skuId: null,
        expectedResponse: "Skincare",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 2,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 2,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 3,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 3,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 4,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 4,
        skuId: 1,
        expectedResponse: "1",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: "",
        skipToSurveyQuestionId: 8
    },
    {
        _id: 5,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 5,
        skuId: 1,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 6,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 6,
        skuId: 1,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 7,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 7,
        skuId: 1,
        expectedResponse: "0",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 8,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 4,
        skuId: 2,
        expectedResponse: "1",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 9,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 5,
        skuId: 2,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 10,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 6,
        skuId: 2,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 11,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 7,
        skuId: 2,
        expectedResponse: "0",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 12,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 4,
        skuId: 3,
        expectedResponse: "1",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 13,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 5,
        skuId: 3,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 14,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 6,
        skuId: 3,
        expectedResponse: "6",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 15,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 7,
        skuId: 3,
        expectedResponse: "0",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 16,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 8,
        skuId: null,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: "",
        skipToSurveyQuestionId: 17
    },
    {
        _id: 17,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 9,
        skuId: null,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: "",
        skipToSurveyQuestionId: 18
    },
    {
        _id: 18,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 10,
        skuId: null,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: "",
        skipToSurveyQuestionId: 19
    },
    {
        _id: 19,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 11,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 20,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 12,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 21,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 13,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 22,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 14,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 23,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 15,
        skuId: null,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: "",
        skipToSurveyQuestionId: 24
    },
    {
        _id: 24,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 16,
        skuId: 1,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 25,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 17,
        skuId: 1,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 26,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 18,
        skuId: 1,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 27,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 16,
        skuId: 2,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 28,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 17,
        skuId: 2,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 29,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 18,
        skuId: 2,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 30,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 16,
        skuId: 3,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 31,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 17,
        skuId: 3,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 32,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 18,
        skuId: 3,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 34,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 13,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 35,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 19,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 36,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 20,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 37,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 21,
        skuId: 1,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 38,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 22,
        skuId: 1,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 39,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 23,
        skuId: 1,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 40,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 21,
        skuId: 2,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 41,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 22,
        skuId: 2,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 42,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 23,
        skuId: 2,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 43,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 21,
        skuId: 3,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 44,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 22,
        skuId: 3,
        expectedResponse: "10",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 45,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 23,
        skuId: 3,
        expectedResponse: "Yes",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
    {
        _id: 46,
        brandId: 1,
        productId: 1,
        visitId: 1,
        questionId: 24,
        skuId: null,
        expectedResponse: "",
        surveyorResponse: "",
        baseScore: 10,
        referenceImage: "",
        surveyorImage: ""
    },
];
//# sourceMappingURL=default.js.map