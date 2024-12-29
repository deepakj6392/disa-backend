export const DEFAULT_BRAND = [
    {
        brandName: "",
        brandLogo: ""
    },
    {
        brandName: "",
        brandLogo: ""
    },
    {
        brandName: "",
        brandLogo: ""
    },
    {
        brandName: "",
        brandLogo: ""
    }
];

export const DEFAULT_PRODUCT = [
    {
        productName: ""
    },
    {
        productName: ""
    },
    {
        productName: ""
    }
];


export const DEFAULT_RETAIL_CHAIN = [
    {
        retailChain: ""
    },
    {
        retailChain: ""
    },
    {
        retailChain: ""
    }
];

export const DEFAULT_STORE_FORMAT = [
    {
        storeFormat: ""
    },
    {
        storeFormat: ""
    },
    {
        storeFormat: ""
    }
];

export const DEFAULT_SKUS = [
    {
        productId: "",
        skuName: "",
        skuGrammage: "",
        skuFullName: "",
        skuImage: "",
        skuCategory: ""
    }
]

export const DEFAULT_STORES = [
    {
        storeName: "",
        storePriority: "",
        storeFormatId: "",
        storeArea: "",
        retailChainId: "",
        storeType: "",
        storeAddress: "",
        storeLocation: ""
    }
]

export const DEFAULT_QUESTIONS = [
    {
        _id: 1,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "display section",
        longQuestion: "What is the name of the section (as displayed in the store) where the below products are placed?",
        shortQuestion: "",
        screenType: "meter-image",
        usedForDeviation: "free text",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 2,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "Overall category size",
        longQuestion: "Let's measure the size of the <strong>SKINCARE</strong> category in this store.",
        shortQuestion: "",
        screenType: "meter",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 3,
        questionCategory: "general information",
        questionSubCategory: "instore information",
        questionChildCategory: "Display alloted",
        longQuestion: "Great, Now let's measure the shelf space allocated to the products shown below",
        shortQuestion: "",
        screenType: "meter-image-second",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 4,
        questionCategory: "Primary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Shelf Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the shelf?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 5,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the shelf?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 6,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Display",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the shelf in front of you that you can reach out without bending with straight hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 7,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "SKU Unplanned Planogram",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on other shelves for which you have to either bend or raise your hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 8,
        questionCategory: "Primary Visibility",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Shelf Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the shelf?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 9,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the shelf?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 10,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Display",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the shelf in front of you that you can reach out without bending with straight hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 11,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "SKU Unplanned Planogram",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on other shelves for which you have to either bend or raise your hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 12,
        questionCategory: "Primary Visibility",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Shelf Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the shelf?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 13,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the shelf?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 14,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "Primary SKU Display",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the shelf in front of you that you can reach out without bending with straight hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 15,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Primary Planogram",
        questionChildCategory: "SKU Unplanned Planogram",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on other shelves for which you have to either bend or raise your hand to pick?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 16,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Wobbler",
        longQuestion: "Do you see a <strong>Wobbler</strong> displayed on the shelves in front of you?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 17,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Shelf Separator",
        longQuestion: "Do you see a <strong>Shelf Separator</strong> displayed on the shelves in front of you?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 18,
        questionCategory: "Primary Visibility",
        questionSubCategory: "Shelf Visibility",
        questionChildCategory: "Shelf Strip",
        longQuestion: "Do you see a <strong>Shelf Strip</strong> displayed on the shelves in front of you?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 19,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "Great JOB !!!<br/>Let's now proceed with the next survey section.",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 20,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Count",
        questionChildCategory: "Gondola Count",
        longQuestion: "Pls walk around various sections and proceed once you have seen any of sections displayed in the below images.",
        shortQuestion: "",
        screenType: "gondola-fsu-selection",
        usedForDeviation: "",
        skuSpecific: "",
        storeDisplayLocation: ""
    },
    {
        _id: 21,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "OK,<br/>Let's start with the survey of <strong>Gondola End</strong>.",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "selection",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 22,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola End",
        questionChildCategory: "Gondola Location",
        longQuestion: "Please provide the name of section where this <strong>Gondola End</strong> is kept in the store.",
        shortQuestion: "",
        screenType: "meter-image",
        usedForDeviation: "free text",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 23,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Branding",
        questionChildCategory: "Gondola Branding",
        longQuestion: "Is the branding on the <strong>Gondola</strong> same as the one displayed in the below picture?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 24,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 25,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 26,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 27,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 28,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 29,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 30,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 31,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 32,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 33,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "Great going !!!<br/>Let's now move to the next <strong>Gondola End</strong> kept in the store.",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "free text",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 34,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola End",
        questionChildCategory: "Gondola Location",
        longQuestion: "Please provide the name of section where this <strong>Gondola End</strong> is kept in the store.",
        shortQuestion: "",
        screenType: "meter-image",
        usedForDeviation: "free text",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 35,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Branding",
        questionChildCategory: "Gondola Branding",
        longQuestion: "Is the branding on the <strong>Gondola</strong> same as the one displayed in the below picture?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 36,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 37,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 38,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 39,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 40,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 41,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 42,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "Gondola SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the Gondola End?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 43,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the Gondola shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 44,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "Gondola Planogram",
        questionChildCategory: "Gondola SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> on the Gondola Shelves same as displayed in the Gondola Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "gondola",
        storeDisplayLocation: ""
    },
    {
        _id: 45,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "Great JOB !!!<br/>Let's now proceed with the survey of the <strong>FSUs</strong> or <strong>Free Standing Units</strong> placed in the store as shown in the image below.",
        shortQuestion: "Pls walk around various sections and proceed once you have seen a FSU",
        screenType: "question-info",
        usedForDeviation: "free text",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 46,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Count",
        questionChildCategory: "FSU Count",
        longQuestion: "How many <strong>FSUs</strong> as displayed in the Image below did you see in the store?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 47,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "OK,<br/>Let's start with the survey of the first <strong>FSUs</strong>",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "free text",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 48,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU",
        questionChildCategory: "FSU Location",
        longQuestion: "Please provide the name of section where this <strong>FSU</strong> is kept in the store.",
        shortQuestion: "",
        screenType: "meter-image",
        usedForDeviation: "free text",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 49,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Branding",
        questionChildCategory: "FSU Branding",
        longQuestion: "Is the branding on the <strong>FSU</strong> same as the one displayed in the below picture?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 50,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 51,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 52,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 53,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 54,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 55,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 56,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 57,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 58,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 59,
        questionCategory: "General Information",
        questionSubCategory: "General Information",
        questionChildCategory: "General Information",
        longQuestion: "Great going !!!<br/>Let's now move to the next <strong>FSU</strong> kept in the store.",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "free text",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 60,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU",
        questionChildCategory: "FSU Location",
        longQuestion: "Please provide the name of section where this <strong>FSU</strong> is kept in the store.",
        shortQuestion: "",
        screenType: "question-info",
        usedForDeviation: "free text",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 61,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Branding",
        questionChildCategory: "FSU Branding",
        longQuestion: "Is the branding on the <strong>FSU</strong> same as the one displayed in the below picture?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 62,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 63,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 64,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Nourishing Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 65,
        questionCategory: "Secondary Availability",
        questionSubCategory: "SKU Availability",
        questionChildCategory: "FSU SKU Availability",
        longQuestion: "Is the SKU <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong>, as shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 66,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 67,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Sheer Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 68,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "SKU availability",
        questionChildCategory: "FSU SKU availability",
        longQuestion: "Is the SKU <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong>, shown in the image below, available on the FSU?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 69,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Facings",
        longQuestion: "How many facings of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> are kept on the FSU shelves?",
        shortQuestion: "",
        screenType: "meter-count",
        usedForDeviation: "number",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
    {
        _id: 70,
        questionCategory: "Secondary Visibility",
        questionSubCategory: "FSU Planogram",
        questionChildCategory: "FSU SKU Display",
        longQuestion: "Is the display of <strong>Skin Firming Melanin Beauty and Hydration 400 ML Body Lotion</strong> on the FSU Shelves same as displayed in the FSU Image shown below?",
        shortQuestion: "",
        screenType: "single-question-yes-no",
        usedForDeviation: "yes/no",
        skuSpecific: "fsu",
        storeDisplayLocation: ""
    },
]