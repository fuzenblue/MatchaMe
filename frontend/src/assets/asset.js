import logo from './logo.png'
import matchy from './matchy.png'
import latte from './latte.jpg'
import pure from './light brew.jpg'
import lemonade from './lamonade.jpg'
import coconut from './coconut.jpg'
import yuzu from './Yuzu Matcha Tonic.jpg'
import sparkling from './Sparkling.jpg'
import strawberry from './Strawberry.jpg'
import aomori from './aomori.png' 
import header_img from './header_img.jpg'

export const assets = {
    logo,
    matchy,
    latte,
    pure,
    lemonade,
    coconut,
    yuzu,
    strawberry,
    sparkling,
    aomori,
    header_img,
}

export const listMenu = [
    {
        _id: 'matcha_1',
        Img: latte,
        name: 'UJI KYOKEN-283',
        type: 'LATTE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: ['Fresh Milk', 'Oat Milk'],
        tasting_notes: ['High umami', 'Full-body', 'Red bean', 'Taro'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['อูมามิสูง', 'เนื้อแน่น', 'ถั่วแดง', 'เผือก']
    },
    {
        _id: 'matcha_2',
        Img: latte,
        name: 'UJI JOYO OKUMIDORI',
        type: 'LATTE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: ['Fresh Milk'],
        tasting_notes: ['FLORAL', 'UMAMI', 'SWEET PEA', 'SMOOTH BODY'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดอกไม้หอมอ่อน ๆ', 'อูมามิ', 'ถั่ว', 'ถั่วหวาน', 'นุ่ม', 'ละมุน']
    },
    {
        _id: 'matcha_3',
        Img: latte,
        name: 'YAME KOMAKAGE',
        type: 'LATTE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'FUKUOKA',
        milk_option: ['Fresh Milk', 'Soy Milk'],
        tasting_notes: ['SMOOTH', 'EASY', 'PEANUT', 'MOCHI AROMA', 'LIGHT', 'REFRESHING GREEN'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['เรียบ', 'นุ่ม', 'ดื่มง่าย', 'กลิ่นถั่วลิสง', 'กลิ่นโมจิ', 'เขียวอ่อน', 'สดชื่น']
    },
    {
        _id: 'matcha_4',
        Img: latte,
        name: 'YABUKITA + SAMIDORI',
        type: 'LATTE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'FUKUOKA',
        milk_option: ['Fresh Milk'],
        tasting_notes: ['EASY', 'FLORAL', 'SMOOTH LIKE VANILLA WAFER', 'LIKE MATCHA KIT-KAT'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดื่มง่าย', 'หอมดอกไม้', 'เนียนนุ่มเหมือนเวเฟอร์วานิลลา', 'และคล้าย MATCHA KIT-KAT']
    },
    {
        _id: 'matcha_5',
        Img: latte,
        name: 'OKUMIDORI + YABUKITA',
        type: 'LATTE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'FUKUOKA',
        milk_option: ['Fresh Milk'],
        tasting_notes: ['EASY', 'CREAMY', 'NUTTY', 'BITTERNESS'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดื่มง่าย', 'ครีมมี่', 'กลิ่นถั่ว', 'ขมปลายลิ้นนิด ๆ']
    },
    {
        _id: 'matcha_6',
        Img: latte,
        name: 'AOYAMA',
        type: 'LATTE',
        matcha_strength_level: 'STRONG',
        origin_province: 'FUKUOKA',
        milk_option: ['Fresh Milk', 'Soy Milk'],
        tasting_notes: ['HIGHT UMAMI', 'SALTY TOASTED BREAD', 'BAKED POTATO'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['อูมามิสูง', 'ขนมปังปิ้งเค็ม', 'มันอบ']
    },
    {
        _id: 'matcha_7',
        Img: latte,
        name: 'HARU',
        type: 'LATTE',
        matcha_strength_level: 'STRONG',
        origin_province: 'FUKUOKA',
        milk_option: ['Fresh Milk', 'Soy Milk', 'Oat Milk'],
        tasting_notes: ['SMOOTH AND UMAMI', 'WELL BALANCED', 'AROMA LIKE PEANUT'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['กลมกล่อม', 'อูมามิสมดุล', 'กลิ่นถั่วลิสง']
    },
    {
        _id: 'matcha_8',
        Img: latte,
        name: 'KYOTO ASAHI',
        type: 'LATTE',
        matcha_strength_level: 'VERY STRONG',
        origin_province: 'UJI',
        milk_option: ['Fresh Milk'],
        tasting_notes: ['DRIED FLOWER', 'DARK CHOCALATE', 'MACADAMIA', 'BUTTER CREAM'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดอกไม้แห้ง', 'ช็อกโกแลตเข้ม', 'แมคาเดเมีย', 'ครีมเนย']
    },
    {
        _id: 'matcha_9',
        Img: pure,
        name: 'YAME TSUYUHIKARI',
        type: 'PURE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'FUKUOKA',
        milk_option: null,
        tasting_notes: ['LIGHT', 'AROMATIC-NUTTY', 'CACAO'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['เบา', 'หอมถั่ว', 'กลิ่นโกโก้']
    },
    {
        _id: 'matcha_10',
        Img: pure,
        name: 'UJI SAMIDORI',
        type: 'PURE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['LIGHT', 'FRESH', 'ELEGANT UMAMMI', 'SWEET SEAWEED AROMA'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['เบา', 'สดชื่น', 'อูมามิแบบสง่างาม', 'กลิ่นสาหร่ายหวาน']
    },
    {
        _id: 'matcha_11',
        Img: pure,
        name: 'GOKASHO ASAHI',
        type: 'PURE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['PRONOUNCED VEGETAL', 'KOMBU', 'JAPANESE MELON', 'RIPEN FRUIT'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['กลิ่นผักเด่นชัด', 'สาหร่ายคอมบุ', 'เมล่อนญี่ปุ่น', 'ผลไม้สุก']
    },
    {
        _id: 'matcha_12',
        Img: pure,
        name: 'OBORO OKUMIDORI',
        type: 'PURE',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'FUKUOKA',
        milk_option: null,
        tasting_notes: ['SMOOTH', 'TOASTED NUTTY BREAD', 'VANILLA'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดื่มง่าย', 'นุ่มละมุน', 'ขนมปังปิ้งถั่วหอม', 'วานิลลา']
    },
    {
        _id: 'matcha_13',
        Img: sparkling,
        name: 'YAMA KAZE',
        type: 'SPARKLING',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['CASUAL', 'ROSTED PEANUT', 'CHOCOLATELY'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['สบาย ๆ', 'ถั่วลิสงคั่ว', 'ช็อกโกแลต']
    },
    {
        _id: 'matcha_14',
        Img: sparkling,
        name: 'YABUKITA + SAMIDORI',
        type: 'SPARKLING',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['EASY', 'FLORAL', 'SMOOTH LIKE VANILLA WAFER', 'MATCHA KIT-KAT'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['ดื่มง่าย', 'ดอกไม้หอม', 'เนียนนุ่มเหมือนเวเฟอร์วานิลลาและ MATCHA KIT-KAT']
    },
    {
        _id: 'matcha_15',
        Img: sparkling,
        name: 'UJI SAMIDORI',
        type: 'SPARKLING',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['LIGHT', 'FRESH', 'ELEGANT UMAMMI', 'SWEET SEAWEED AROMA'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['เบา', 'สดชื่น', 'อูมามิแบบสง่างาม', 'กลิ่นสาหร่ายหวาน']
    },
    {
        _id: 'matcha_16',
        Img: yuzu,
        name: 'SPLARKLING YUZU',
        type: 'SPARKLING',
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['CASUAL', 'ROSTED PEANUT', 'CHOCOLATELY', 'FRESH', 'YUZU'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['สบาย ๆ', 'ถั่วลิสงคั่ว', 'ช็อกโกแลต', 'สดชื่น', 'ส้มยูสุ']
    },
    {
        _id: 'matcha_17',
        Img: aomori,
        name: 'AOMORI',
        type: ['ONLY MATCHAME', 'SPARKLING'],
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['LIGHT', 'FRESH', 'ELEGANT UMAMMI', 'SWEET SEAWEED AROMA', 'APLLE AOMORI'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['มีกลิ่นสาหร่าย', 'หวาน', 'สดชื่น', 'แอปเปิ้ลอาโอโมริ']
    },
    {
        _id: 'matcha_18',
        Img: lemonade,
        name: 'LEMON SODA',
        type: ['ONLY MATCHAME', 'SPARKLING'],
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['SEAWEED', 'ALMOND', 'UMAMI'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['สาหร่าย', 'อัลมอนด์', 'อูมามิ']
    },
    {
        _id: 'matcha_19',
        Img: coconut,
        name: 'COCONUT CLOUD',
        type: ['ONLY MATCHAME', 'PURE'],
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: null,
        tasting_notes: ['HAZELNUT', 'ROASTED', 'SMOKY', 'NUTTY AROMA'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['เฮเซลนัท', 'รสคั่ว', 'กลิ่นรมควัน', 'กลิ่นถั่ว']
    },
    {
        _id: 'matcha_20',
        Img: strawberry,
        name: 'NISHIO STRAWBERRY',
        type: ['ONLY MATCHAME', 'LATTE'],
        matcha_strength_level: 'MEDIUM',
        origin_province: 'UJI',
        milk_option: ['Fresh Milk', 'Oat Milk'],
        tasting_notes: ['SMOOTH', 'COTTON CANDY', 'UMAMI', 'OCEAN BREEZE'],
        sweetness_options: ['0%', '25%', '50%', '75%', '100%'],
        tasting_notes_th: ['นุ่มละมุน', 'ขนมสายไหม', 'อูมามิ', 'กลิ่นลมทะเล']
    },
]

import cafe_img_l from './cafe_img_l.jpg'
import cafe_img_c from './cafe_img_c.jpg'
import cafe_img_r from './cafe_img_r.jpg'

export const card = {
    cafe_img_l,
    cafe_img_c,
    cafe_img_r,

}


