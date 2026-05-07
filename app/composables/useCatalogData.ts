export const useCatalogData = () => {
  const categories = [
    {
      key: 'hoa',
      title: 'Hoa',
      route: '/hoa',
      eyebrow: 'Hoa tươi',
      summary: 'Bó hoa tươi theo phong cách garden — mềm mại, tinh tế, đủ để nói thay lời bạn muốn nói.',
      accent: 'Hoa theo mùa',
      heroImage: 'https://i.pinimg.com/originals/ee/a0/08/eea0083d4d08246d7339fe0dcd5fdb75.jpg',
      feature: 'Bó tay mềm, bảng màu dịu và cảm giác rất dễ thương ngay từ ánh nhìn đầu tiên.'
    },
    {
      key: 'banh',
      title: 'Bánh',
      route: '/banh',
      eyebrow: 'Bánh handmade',
      summary: 'Bánh kem handmade với từng chi tiết được chăm chút — xứng đáng cho những dịp bạn muốn ghi dấu.',
      accent: 'Bánh theo dịp',
      heroImage: 'https://i.pinimg.com/originals/6f/f1/f3/6ff1f340b2ec7777a468e93d9da8827b.jpg',
      feature: 'Màu nhẹ, mặt bánh đẹp và đủ tinh tế để xuất hiện trong mọi khung hình kỷ niệm.'
    },
    {
      key: 'nuoc',
      title: 'Nước',
      route: '/nuoc',
      eyebrow: 'Thức uống signature',
      summary: 'Thức uống signature tươi mát, hoàn hảo để đi kèm set quà hoặc làm rực rỡ thêm bữa tiệc của bạn.',
      accent: 'Nước theo mùa',
      heroImage: 'https://i.pinimg.com/736x/30/22/56/30225631c7040d597f562a6eb406cb09.jpg',
      feature: 'Trong veo, mát mắt và luôn khiến bàn tiệc trông có sức sống hơn.'
    }
  ]

  const detailMap = {
    hoa: {
      title: 'Hoa tươi — đủ nói lên điều bạn muốn',
      badge: 'Hoa tươi',
      eyebrow: 'Hoa tươi',
      intro:
        'Mỗi bó hoa tại evershop được tuyển chọn và bó tay theo phong cách garden hiện đại — mềm mại, tươi lâu và đẹp cả trong ảnh lẫn ngoài đời.',
      heroImage:
        'https://i.pinimg.com/originals/ee/a0/08/eea0083d4d08246d7339fe0dcd5fdb75.jpg',
      highlight:
        'Có những điều khó nói thành lời. Một bó hoa đẹp, đôi khi lại nói hộ rất tự nhiên.',
      collectionTitle: 'Những bó hoa được chọn để khiến người nhận mỉm cười',
      tag: 'Được yêu thích',
      tipsEyebrow: 'Vì sao khách chọn hoa ở evershop',
      tipsTitle: 'Vẻ đẹp nằm ở cảm giác khi trao đi',
      items: [
        {
          name: 'Garden Whisper',
          note: 'Sinh nhật · Kỷ niệm · Tri ân',
          image: 'https://i.pinimg.com/736x/b2/3d/a1/b23da12c3dc48433b02a6736060e0906.jpg',
          description:
            "Hoa ranunculus và hồng pastel xen kẽ lá xanh nhẹ. Dịu dàng và đúng nghĩa 'quà tặng từ trái tim'. Phù hợp sinh nhật, kỷ niệm, tri ân."
        },
        {
          name: 'Soft Champagne',
          note: 'Premium bouquet',
          image: 'https://i.pinimg.com/564x/b5/f8/09/b5f809600ad7ebcb003b5507a142653d.jpg',
          description:
            'Tông kem-champagne-blush. Form bó đầy đặn, sang trọng vừa đủ để không cần thêm gì. Lựa chọn premium cho những dịp cần gây ấn tượng.'
        },
        {
          name: 'Sunday Bloom Box',
          note: 'Flower box',
          image: 'https://i.pinimg.com/736x/2f/c7/25/2fc7258e5dcbec7ed1ed6e51a7139fe4.jpg',
          description:
            'Hộp hoa gọn gàng, tiện tặng đối tác, bạn bè, hoặc để trang trí tiệc nhỏ. Nhìn đơn giản, nhưng ai nhận cũng thích.'
        }
      ],
      tips: [
        'Mỗi bó được phối để lên ảnh đẹp, nhưng khi cầm ngoài đời vẫn giữ được cảm giác mềm và thật.',
        'Tông màu dịu giúp hoa dễ đi cùng bánh và nước khi bạn muốn làm một set quà trọn vẹn.',
        'Có bó dành cho lời chúc ngọt ngào, cũng có bó dành cho những dịp cần để lại ấn tượng lâu hơn.'
      ]
    },
    banh: {
      title: 'Bánh handmade — đẹp để chụp, ngon để nhớ',
      badge: 'Bánh handmade',
      eyebrow: 'Bánh handmade',
      intro:
        'Không lòe loẹt, không rườm rà. Bánh của evershop theo đuổi vẻ đẹp tối giản — texture mịn, màu nhẹ và những chi tiết nhỏ đủ để khiến người nhận ngạc nhiên.',
      heroImage:
        'https://i.pinimg.com/originals/6f/f1/f3/6ff1f340b2ec7777a468e93d9da8827b.jpg',
      highlight:
        'Một chiếc bánh đẹp luôn khiến bữa tiệc ấm hơn, và khiến người được tặng nhớ lâu hơn.',
      collectionTitle: 'Những chiếc bánh dành cho dịp bạn muốn ghi dấu',
      tag: 'Handmade',
      tipsEyebrow: 'Vì sao khách mê bánh ở đây',
      tipsTitle: 'Bánh không cần phô trương vẫn đủ khiến người ta nhớ',
      items: [
        {
          name: 'Ivory Ribbon',
          note: 'Sinh nhật · Kỷ niệm',
          image: 'https://i.pinimg.com/736x/c9/94/04/c99404984d5c25a81d38e3ab5cd78f21.jpg',
          description:
            'Bánh kem trắng với ribbon và hoa tươi điểm xuyết. Sang mà không cần cầu kỳ. Dành cho sinh nhật hoặc kỷ niệm bạn muốn ghi dấu.'
        },
        {
          name: 'Petal Cream',
          note: 'Floral cake',
          image: 'https://i.pinimg.com/originals/88/1b/61/881b61c1c014c928441d0ab0f919d1f1.jpg',
          description:
            'Mặt kem mịn, form tròn cân đối và nhãn chữ tinh tế. Đẹp khi chụp một mình, càng đẹp hơn khi đặt cạnh bó hoa.'
        },
        {
          name: 'Blush Party Slice',
          note: 'Tea party · Tiệc nhỏ',
          image: 'https://i.pinimg.com/originals/5a/84/5e/5a845e0f2530109830c7fcf7e7d6d1ce.jpg',
          description:
            'Nhỏ gọn, decor đẹp, dễ chia. Lý tưởng cho tea party, tiệc tại nhà hoặc đặt kèm set quà.'
        }
      ],
      tips: [
        'Bánh được chọn theo gu tối giản để đứng riêng cũng đẹp, đi cùng hoa cũng hài hòa.',
        'Những chi tiết nhỏ như ribbon, hoa tươi hay dòng chữ ngắn là thứ khiến người nhận thấy mình được để tâm.',
        'Rất hợp cho những dịp bạn muốn vừa chúc mừng, vừa lưu lại một bức ảnh thật xinh.'
      ]
    },
    nuoc: {
      title: 'Thức uống signature — tươi mát, đẹp mắt, đúng dịp',
      badge: 'Thức uống signature',
      eyebrow: 'Thức uống signature',
      intro:
        'Nước tại evershop không chỉ để uống — mà để hoàn chỉnh set quà, làm đẹp bàn tiệc và tạo ra khoảnh khắc "wow" khi khách nhìn vào.',
      heroImage:
        'https://i.pinimg.com/736x/30/22/56/30225631c7040d597f562a6eb406cb09.jpg',
      highlight:
        'Một ly nước đẹp mắt có thể làm sáng cả bàn tiệc chỉ trong một khoảnh khắc nhìn đầu tiên.',
      collectionTitle: 'Những thức uống làm bữa gặp gỡ thêm đặc biệt',
      tag: 'Signature',
      tipsEyebrow: 'Vì sao nên thêm đồ uống',
      tipsTitle: 'Đôi khi điều làm set quà trọn vẹn lại là một ly nước thật xinh',
      items: [
        {
          name: 'Rose Fizz',
          note: 'Mocktail signature',
          image: 'https://i.pinimg.com/originals/73/0c/95/730c95969e64b42627dbaee74f1625a8.png',
          description:
            'Mocktail tông hồng nhạt, sủi bọt nhẹ và thơm. Hợp với tiệc kỷ niệm, sinh nhật hoặc bất kỳ dịp nào cần thêm chút lãng mạn.'
        },
        {
          name: 'Citrus Bloom Tea',
          note: 'Tea set',
          image: 'https://i.pinimg.com/originals/7b/13/18/7b13186af19ad6389106ca8f3f9b0ce5.jpg',
          description:
            'Trà và trái cây trong ly thuỷ tinh trong vắt. Nhìn đã thấy mát. Uống thì càng không muốn dừng.'
        },
        {
          name: 'Garden Spark',
          note: 'Party refreshment',
          image: 'https://i.pinimg.com/originals/52/12/c9/5212c92ba80deafd84d5f0efbd1cd622.jpg',
          description:
            'Nước ép trái cây và lá thơm — tươi, sạch và đẹp khi chụp ảnh cùng set quà hoa + bánh.'
        }
      ],
      tips: [
        'Một ly nước đúng màu, đúng kiểu giúp bàn tiệc trông sống động và có điểm nhấn hơn hẳn.',
        'Rất hợp khi đi cùng hoa và bánh trong một set quà hoặc một buổi gặp gỡ nhỏ tại nhà.',
        'Có những lúc thứ khiến khách trầm trồ không phải món quà lớn, mà là cảm giác mọi thứ được chuẩn bị thật xinh.'
      ]
    }
  } as const

  return {
    categories,
    detailMap
  }
}
