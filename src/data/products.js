export const products = [
  {
    id: 'nep-cam-vinh-hien-1k',
    name: 'Nếp Cẩm Vinh Hiển Túi 1KG',
    category: 'Gạo đặc sản',
    tagline: 'Màu sắc tự nhiên - Dinh dưỡng dồi dào',
    description: 'Nếp Cẩm Vinh Hiển được tuyển chọn từ các giống nếp quý, giữ trọn lớp cám màu tím sẫm chứa nhiều anthocyanin cực tốt cho tim mạch và sức khỏe.',
    status: 'Liên hệ',
    stockStatus: 'Hết hàng',
    img: '/cat_rice_brown.png',
    price: 'Liên hệ',
    features: [
       'Hạt nếp to tròn, màu tím sẫm tự nhiên',
       'Khi nấu chín có độ dẻo cao, hương thơm nồng nàn',
       'Giàu chất chống oxy hóa, sắt và chất xơ'
    ],
    detailedDescription: `
      <h3>Mô tả</h3>
      <p>Nếp cẩm không chỉ là nguyên liệu làm nên món xôi, đó còn là hương vị của sự ấm áp. Gạo Nếp Cẩm Vinh Hiển mang đến sự lựa chọn hoàn hảo cho bữa cơm gia đình thêm phong phú.</p>
    `,
    cookingInstructions: [
      'Vo gạo nhẹ tay 1-2 lần',
      'Ngâm nếp trong nước khoảng 4-6 tiếng trước khi nấu',
      'Tỷ lệ nước: 1 nếp - 0.9 nước',
      'Dùng nếp khi còn nóng sẽ ngon hơn'
    ],
    storage: 'Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.',
    shelfLife: '12 tháng kể từ ngày sản xuất',
    certifications: ['VietGAP', 'HACCP'],
    relatedIds: ['nep-sap-vinh-hien-25k', 'gao-com-nieu-lai-long-phung-25k']
  },
  {
    id: 'nep-sap-vinh-hien-25k',
    name: 'Nếp Sáp Vinh Hiển 25KG',
    category: 'Gạo HORECA',
    tagline: 'Dẻo dính - Xôi thơm',
    description: 'Không chỉ là hạt nếp làm nên món ăn, đó còn là hương vị của Tết. Gạo Nếp Sáp Vinh Hiển ra đời từ tâm huyết muốn đưa hạt nếp ngon, chuẩn truyền thống đến gần hơn với mỗi gia đình.',
    status: 'Liên hệ',
    stockStatus: 'Hết hàng',
    img: '/cat_rice_white.png',
    price: 'Liên hệ',
    features: [
       'Hạt nếp trắng đều, bề mặt mịn, tỏa hương thơm dịu nhẹ',
       'Khi nấu chín, nếp sáp mang đến hương vị thơm ngon, đậm đà',
       'Hạt nếp dẻo ngon, dẻo vừa, có vị ngọt hậu tự nhiên'
    ],
    detailedDescription: `
      <h3>Mô tả</h3>
      <p>Xuất phát từ vùng Đồng Tháp Mười, nơi nổi tiếng với những giống nếp trứ danh. Gạo Nếp Sáp Vinh Hiển luôn ưu tiên chất lượng hạt - độ dẻo - mùi thơm tự nhiên ngay từ khâu chọn giống.</p>
    `,
    cookingInstructions: [
      'Vo gạo 1-2 lần',
      'Ngâm khoảng 2-3 tiếng (tùy sở thích)',
      'Tỷ lệ nếp/nước tùy thuộc vào phương pháp nấu (đồ xôi hoặc nấu nồi điện)'
    ],
    storage: 'Bảo quản nơi khô ráo, thoáng mát, đậy kín nắp thùng sau khi lấy nếp.',
    shelfLife: '12 tháng kể từ ngày sản xuất',
    certifications: ['HACCP', 'VietGAP'],
    relatedIds: ['nep-cam-vinh-hien-1k', 'gao-com-tam-vinh-hien-25k']
  },
  {
    id: 'gao-com-nieu-lai-long-phung-25k',
    name: 'Gạo Cơm Niêu Lài Long Phụng 25KG',
    category: 'Gạo cao cấp',
    tagline: 'Cơm niêu chuẩn vị - Hương thơm khó cưỡng',
    description: 'Gạo Lài Long Phụng được tuyển chọn cho các nhà hàng cơm niêu chuyên nghiệp, mang lại độ tơi xốp và hương thơm đặc trưng.',
    status: 'Liên hệ',
    stockStatus: 'Còn hàng',
    img: '/cat_rice_white.png',
    price: 'Liên hệ',
    features: [
       'Hạt gạo thon dài, đều màu',
       'Cơm chín tơi, mềm, vị ngọt thanh',
       'Mùi thơm dịu nhẹ tự nhiên'
    ],
    cookingInstructions: [
      'Vo gạo nhẹ tay',
      'Tỷ lệ 1 gạo - 1.1 nước',
      'Ngon hơn khi nấu trong niêu đất'
    ],
    storage: 'Nơi khô ráo, tránh ẩm ướt.',
    shelfLife: '12 tháng',
    certifications: ['HACCP'],
    relatedIds: ['nep-cam-vinh-hien-1k', 'st25-harmony']
  },
  {
    id: 'gao-com-tam-vinh-hien-25k',
    name: 'Gạo Cơm Tấm Vinh Hiển 25KG',
    category: 'Gạo HORECA',
    tagline: 'Cơm tấm dẻo ngon - Vừa lòng thực khách',
    description: 'Tấm đặc biệt được tách từ những hạt gạo ST trứ danh, đảm bảo độ ngọt và hương thơm không lẫn vào đâu được.',
    status: 'Liên hệ',
    stockStatus: 'Còn hàng',
    img: '/cat_rice_white.png',
    price: 'Liên hệ',
    features: [
       'Hạt tấm đều, không vụn',
       'Cơm tấm nở vừa, độ dẻo ổn định',
       'Thơm mùi gạo mới'
    ],
    cookingInstructions: [
       'Ngâm tấm khoảng 15 phút trước khi nấu',
       'Ít nước hơn gạo thường',
       'Nên hấp cách thủy để giữ độ ngọt'
    ],
    storage: 'Bảo quản kín, tránh mối mọt.',
    shelfLife: '6 tháng',
    certifications: ['VietGAP'],
    relatedIds: ['nep-sap-vinh-hien-25k', 'gao-com-nieu-lai-long-phung-25k']
  },
  {
    id: 'st25-harmony',
    name: 'GẠO ST25 HARMONY',
    category: 'Gạo cao cấp',
    tagline: 'Vị ngon hòa quyện, khác biệt để dẫn đầu',
    description: 'Siêu phẩm Gạo ST25 Harmony là sự kết hợp tinh tế giữa giống lúa ST25 trứ danh và các giống lúa ST cao cấp khác.',
    status: 'Liên hệ',
    stockStatus: 'Còn hàng',
    img: '/banner_harmony.png',
    price: '45.000đ',
    features: [
      'Hạt gạo dài, trắng trong, không bạc bụng',
      'Mùi thơm lá dứa tự nhiên, vị ngọt đậm đà',
      'Cơm dẻo mềm, giữ được độ ngon ngay cả khi nguội'
    ],
    cookingInstructions: [
      'Vo gạo 1 lần nhẹ tay',
      'Tỷ lệ 1 gạo - 1 nước',
      'Không mở nắp trong khi nấu'
    ],
    storage: 'Bảo quản nơi khô ráo.',
    shelfLife: '12 tháng',
    certifications: ['VietGAP', 'HACCP', 'ISO 22000'],
    relatedIds: ['gao-com-nieu-lai-long-phung-25k', 'gao-com-tam-vinh-hien-25k']
  }
]
