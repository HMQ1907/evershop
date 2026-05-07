export const useCatalogData = () => {
  const categories = [
    {
      key: 'hoa',
      title: 'Hoa',
      route: '/hoa',
      eyebrow: 'Flower collection',
      summary: 'Bo hoa tone pastel, garden style va premium wrapping cho nhung dip can su tinh te.',
      accent: 'Sage bloom',
      heroImage: 'https://i.pinimg.com/originals/ee/a0/08/eea0083d4d08246d7339fe0dcd5fdb75.jpg',
      feature: 'Bouquet layering, wrapping mem va palette nhe sang.'
    },
    {
      key: 'banh',
      title: 'Banh',
      route: '/banh',
      eyebrow: 'Cake collection',
      summary: 'Banh ky niem, banh mini party va nhung mau layout toi gian duoc cham chi tiet.',
      accent: 'Cream atelier',
      heroImage: 'https://i.pinimg.com/originals/6f/f1/f3/6ff1f340b2ec7777a468e93d9da8827b.jpg',
      feature: 'Minimal icing, fresh flower decor va thong diep ca nhan hoa.'
    },
    {
      key: 'nuoc',
      title: 'Nuoc',
      route: '/nuoc',
      eyebrow: 'Drink collection',
      summary: 'Nuoc signature, mocktail va tea set duoc phoi cung banh va hoa cho visual dong dieu.',
      accent: 'Fresh pour',
      heroImage: 'https://i.pinimg.com/736x/30/22/56/30225631c7040d597f562a6eb406cb09.jpg',
      feature: 'Trong treo, tuoi va dep trong moi khung hinh tiec nho.'
    }
  ]

  const detailMap = {
    hoa: {
      title: 'Hoa',
      eyebrow: 'Floral gallery',
      intro:
        'Nhung bo hoa cua evershop di theo huong mem, nhe va hien dai. Khong qua cau ky, nhung du tinh de tro thanh mon qua de nho.',
      heroImage:
        'https://i.pinimg.com/originals/ee/a0/08/eea0083d4d08246d7339fe0dcd5fdb75.jpg',
      highlight:
        'Palette uu tien ivory, blush, sage va nude peach de giu tong the thanh lich.',
      items: [
        {
          name: 'Garden Whisper',
          note: 'Hoa sinh nhat va ky niem',
          image: 'https://i.pinimg.com/736x/b2/3d/a1/b23da12c3dc48433b02a6736060e0906.jpg',
          description: 'Mix hoa ranunculus, hong pastel va foliage xanh nhe, phu hop cho nhung dip can su diu dang.'
        },
        {
          name: 'Soft Champagne',
          note: 'Bouquet premium',
          image: 'https://i.pinimg.com/564x/b5/f8/09/b5f809600ad7ebcb003b5507a142653d.jpg',
          description: 'Tong mau champagne, kem va phan blush duoc goi gon trong form bo hoa day dan hoi luxury.'
        },
        {
          name: 'Sunday Bloom Box',
          note: 'Flower box',
          image: 'https://i.pinimg.com/736x/2f/c7/25/2fc7258e5dcbec7ed1ed6e51a7139fe4.jpg',
          description: 'Phien ban hop hoa gon gang de tang doi tac, ban be hoac trang tri tiec mini.'
        }
      ],
      tips: [
        'Bo hoa form mem, nhieu lop canh va wrapping vai giup tong the sang hon.',
        'Hoa tone pastel de ket hop de dang voi banh va nuoc trong set qua.',
        'Hinh anh bo hoa nen chup gan va co nhieu khoang tho de tang cam giac premium.'
      ]
    },
    banh: {
      title: 'Banh',
      eyebrow: 'Cake gallery',
      intro:
        'Banh cua evershop khong theo huong loe loet. Thay vao do la texture mem, mau nhat va nhung chi tiet nho du tinh.',
      heroImage:
        'https://i.pinimg.com/originals/6f/f1/f3/6ff1f340b2ec7777a468e93d9da8827b.jpg',
      highlight:
        'Design banh toi gian se ben hon ve visual va de phoi hop cung hoa, qua va tiec nho.',
      items: [
        {
          name: 'Ivory Ribbon',
          note: 'Celebration cake',
          image: 'https://i.pinimg.com/736x/c9/94/04/c99404984d5c25a81d38e3ab5cd78f21.jpg',
          description: 'Banh tong kem voi chi tiet ribbon va hoa tuoi, phu hop cho sinh nhat hoac ky niem.'
        },
        {
          name: 'Petal Cream',
          note: 'Minimal floral cake',
          image: 'https://i.pinimg.com/originals/88/1b/61/881b61c1c014c928441d0ab0f919d1f1.jpg',
          description: 'Mat kem min, form tron dep va nhan chu tinh te giup tong the thanh lich va de chup anh.'
        },
        {
          name: 'Blush Party Slice',
          note: 'Mini party cake',
          image: 'https://i.pinimg.com/originals/5a/84/5e/5a845e0f2530109830c7fcf7e7d6d1ce.jpg',
          description: 'Kich thuoc gon, decor dep mat cho tea party, tiec tai nha hoac gift set.'
        }
      ],
      tips: [
        'Nen giu bang mau kem, blush, caramel nhat de hop tong visual thuong hieu.',
        'Banh trang tri hoa tuoi hoac trai nho se lien ket dep voi page Hoa.',
        'Khoang trang tren mat banh giup viec them ten hoac loi nhan sau nay de hon.'
      ]
    },
    nuoc: {
      title: 'Nuoc',
      eyebrow: 'Drink gallery',
      intro:
        'Nuoc la manh ghep giup bo qua tang va ban tiec cua evershop trong veo hon, tuoi hon va co them nhiet do song.',
      heroImage:
        'https://i.pinimg.com/736x/30/22/56/30225631c7040d597f562a6eb406cb09.jpg',
      highlight:
        'Drink menu nen trong, sach va co layering mau nhe de giu do sang cho tong the.',
      items: [
        {
          name: 'Rose Fizz',
          note: 'Mocktail signature',
          image: 'https://i.pinimg.com/originals/73/0c/95/730c95969e64b42627dbaee74f1625a8.png',
          description: 'Ly nuoc tong hong nhat va sparkling nhe, hop cho tiec ky niem va banh floral.'
        },
        {
          name: 'Citrus Bloom Tea',
          note: 'Tea set',
          image: 'https://i.pinimg.com/originals/7b/13/18/7b13186af19ad6389106ca8f3f9b0ce5.jpg',
          description: 'Tea va citrus duoc trinh bay trong ly thuy tinh trong, tao cam giac sach va hien dai.'
        },
        {
          name: 'Garden Spark',
          note: 'Party refreshment',
          image: 'https://i.pinimg.com/originals/52/12/c9/5212c92ba80deafd84d5f0efbd1cd622.jpg',
          description: 'Nuoc phoi trai cay va la thom, rat hop de di cung set qua hoa banh trong tiec nho.'
        }
      ],
      tips: [
        'Ly thuy tinh trong va garnish nhe se giu giao dien tong the sang hon.',
        'Nuoc co mau trong, hong nhat hoac vang nhat de chup anh de dep.',
        'Page nuoc nen nhan manh tinh freshness thay vi qua nhieu text nặng.'
      ]
    }
  } as const

  return {
    categories,
    detailMap
  }
}
