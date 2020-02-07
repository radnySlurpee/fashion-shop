const SHOP_DATA = {
  hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Jordan Classic',
        imageUrl: 'https://i.ibb.co/jwspz2m/jordan-classic99-snapback-hat-NTBzf-X.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Aerobill Legacy',
        imageUrl: 'https://i.ibb.co/XJcFg1V/aerobill-legacy91-adjustable-hat-S1-Wck-P.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Houston Rockets',
        imageUrl: 'https://i.ibb.co/Lh7KCDn/houston-rockets-heritage-86-nba-cap-Fs-V49v.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Barcelona Legacy',
        imageUrl: 'https://i.ibb.co/2hwXqN4/dri-fit-fc-barcelona-legacy91-adjustable-hat-Vpdk14.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Pro Cap',
        imageUrl: 'https://i.ibb.co/Zdyw8fM/pro-cap-1-Tn-Bsz.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Acg aw84 Cap',
        imageUrl: 'https://i.ibb.co/kMWhNjN/acg-aw84-cap-3-Ll-RQS.jpg',
        price: 14
      },
      {
        id: 7,
        name: 'ACG Yellow Hat',
        imageUrl: 'https://i.ibb.co/xYBRqpk/acg-adjustable-hat-Jp0c4-G.jpg',
        price: 18
      },
      {
        id: 8,
        name: 'Kyrie Heritage',
        imageUrl: 'https://i.ibb.co/bLXwrkn/kyrie-heritage86-basketball-hat-DBs-Lxh.jpg',
        price: 14
      },
      {
        id: 9,
        name: 'Tailwind Runnig Cap',
        imageUrl: 'https://i.ibb.co/yVFMqkn/tailwind-running-cap-F4-QBb-V.jpg',
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Air Jordan 1 Mid',
        imageUrl: 'https://i.ibb.co/QJ75m49/air-jordan-1-mid-shoe-Bp-ARGV.jpg',
        price: 220
      },
      {
        id: 11,
        name: 'Phantom Vision',
        imageUrl: 'https://i.ibb.co/GCXngS5/phantom-vision-2-elite-dynamic-fit-fg-football-boot-j-Sc-X4-B.jpg',
        price: 280
      },
      {
        id: 12,
        name: 'Nikecourt air zoom vapor',
        imageUrl: 'https://i.ibb.co/V275kqw/nikecourt-air-zoom-vapor-hard-court-tennis-shoe-q-Cc-Pr-N.jpg',
        price: 110
      },
      {
        id: 13,
        name: 'Air Max95',
        imageUrl: 'https://i.ibb.co/ZLwgZ7s/air-max-95-essential-shoe-6n9-HLv.jpg',
        price: 160
      },
      {
        id: 14,
        name: 'Joyride Run Flyknit',
        imageUrl: 'https://i.ibb.co/CQ2QY8L/joyride-run-flyknit-running-shoe-sqfq-GQ.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Jordan Jumpman 2020',
        imageUrl: 'https://i.ibb.co/cyWczGf/jordan-jumpman-2020-pf-basketball-shoe-CHh-KGl.jpg',
        price: 160
      },
      {
        id: 16,
        name: 'Air Zoom Pegasus36',
        imageUrl: 'https://i.ibb.co/Fgb1zf7/air-zoom-pegasus-36-running-shoe-31-St-JM.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'P6000 QC',
        imageUrl: 'https://i.ibb.co/tmRDFn9/p-6000-shoe-Qc-Qbpx.jpg',
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Sportswear Woven Jacket',
        imageUrl: 'https://i.ibb.co/JmC45RF/sportswear-woven-jacket-BBRl1f.jpg',
        price: 125
      },
      {
        id: 19,
        name: 'Essential Hooded',
        imageUrl: 'https://i.ibb.co/nj7xMHc/essential-hooded-running-jacket-Sjm-LWl.jpg',
        price: 90
      },
      {
        id: 20,
        name: 'Sportswear Windrunner Hooded',
        imageUrl: 'https://i.ibb.co/y5bv9rc/sportswear-windrunner-hooded-jacket-MLg-Tq4.jpg',
        price: 90
      },
      {
        id: 21,
        name: 'Air Running Jacket',
        imageUrl: 'https://i.ibb.co/nwvsKm7/air-running-jacket-w-LV0-H9.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Sportswear Woven BJ',
        imageUrl: 'https://i.ibb.co/ccKGHtQ/sportswear-woven-jacket-Bj-Fnd0.jpg',
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Indy Light Bra CSW',
        imageUrl: 'https://i.ibb.co/bXj765w/indy-light-support-sports-bra-c-Sw-D3f.jpg',
        price: 25
      },
      {
        id: 24,
        name: 'Sportswear Fleece Crew',
        imageUrl: 'https://i.ibb.co/Pw46T7J/sportswear-fleece-crew-ZXctg-L.jpg',
        price: 20
      },
      {
        id: 25,
        name: 'Sportswear essential 9RQ',
        imageUrl: 'https://i.ibb.co/k8pxkg4/sportswear-essential-t-shirt-9-Rq-XMb.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Miler Tokyo Short Sleeve',
        imageUrl: 'https://i.ibb.co/fX3pZG8/miler-tokyo-short-sleeve-running-top-4q-WGKL.jpg',
        price: 80
      },
      {
        id: 27,
        name: 'Pro Mesh Top',
        imageUrl: 'https://i.ibb.co/PmBqC7h/pro-mesh-top-HWMXvc.jpg',
        price: 45
      },
      {
        id: 28,
        name: 'Short Sleeve Crop Top TT1',
        imageUrl: 'https://i.ibb.co/WDhmqB5/sportswear-short-sleeve-crop-top-Tt1-BWm.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Fleece Dress GP60',
        imageUrl: 'https://i.ibb.co/pf0H7Wj/sportswear-fleece-dress-m-GP60-F.jpg',
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Giannis Drifit',
        imageUrl: 'https://i.ibb.co/sPVPyK5/giannis-dri-fit-basketball-t-shirt-j23-T5l.jpg',
        price: 325
      },
      {
        id: 31,
        name: 'Jordan Jumpman Classics',
        imageUrl: 'https://i.ibb.co/QFdfkLx/jordan-jumpman-classics-fleece-crew-sxjj12.jpg',
        price: 20
      },
      {
        id: 32,
        name: 'Jordan 23 Alpha',
        imageUrl: 'https://i.ibb.co/kJVgVK6/jordan-23-alpha-short-sleeve-training-top-1-K4-Lp-Q.jpg',
        price: 25
      },
      {
        id: 33,
        name: 'SB Icon Skate Crew',
        imageUrl: 'https://i.ibb.co/S5CS0bQ/sb-icon-skate-crew-HQHc9t.jpg',
        price: 25
      },
      {
        id: 34,
        name: 'Drifit PG',
        imageUrl: 'https://i.ibb.co/KhsFprD/dri-fit-pg-basketball-t-shirt-C0g-KGh.jpg',
        price: 40
      },
      {
        id: 35,
        name: 'LeBron Lakers NBA Edition',
        imageUrl: 'https://i.ibb.co/vxwc2Ww/lebron-james-lakers-city-edition-nba-swingman-jersey-GZB7z-D.jpg',
        price: 25
      }
    ]
  }
};

//https://rad-ongtawco.imgbb.com/

export default SHOP_DATA;
