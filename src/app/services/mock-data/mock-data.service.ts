import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  constructor() {}

  public mockData = [
    {
      id: 1,
      company_name: 'Meedoo',
      status: 'Approved',
      company_phone_number: '389-871-9932',
      company_address: '0864 Golf Point',
      main_contact_name: 'Sayer Braunle',
      main_contact_email: 'dclearie0@senate.gov',
      main_contact_phone: '847-364-3947',
      secondary_contact_name: 'Dara Clearie',
      secondary_contact_email: 'dclearie0@gov.uk',
      secondary_contact_phone: '639-283-6822',
      performance: [
        {
          year: 2011,
          income: '$3952685155.78',
          profit: '$656781.06'
        },
        {
          year: 2012,
          income: '$9696297517.57',
          profit: '$1033075.45'
        },
        {
          year: 2013,
          income: '$8235098031.51',
          profit: '$1712007.11'
        },
        {
          year: 2014,
          income: '$3135261542.37',
          profit: '$3717218.70'
        },
        {
          year: 2015,
          income: '$9321667796.77',
          profit: '$-402759.19'
        },
        {
          year: 2016,
          income: '$4912928526.81',
          profit: '$4519185.85'
        },
        {
          year: 2017,
          income: '$9400516616.34',
          profit: '$1831956.69'
        },
        {
          year: 2018,
          income: '$6321267369.97',
          profit: '$-968211.08'
        }
      ]
    },
    {
      id: 2,
      company_name: 'Latz',
      status: 'Approved',
      company_phone_number: '723-546-7507',
      company_address: '35450 Morningstar Terrace',
      main_contact_name: 'Lorin Sebborn',
      main_contact_email: 'tsterricks1@squarespace.com',
      main_contact_phone: '721-793-8431',
      secondary_contact_name: 'Terrill Sterricks',
      secondary_contact_email: 'tsterricks1@mtv.com',
      secondary_contact_phone: '297-529-7355',
      performance: [
        {
          year: 2011,
          income: '$64381046.45',
          profit: '$4357012.98'
        },
        {
          year: 2012,
          income: '$1468852481.97',
          profit: '$892341.15'
        },
        {
          year: 2013,
          income: '$1981279422.69',
          profit: '$-478710.13'
        },
        {
          year: 2014,
          income: '$8176015545.09',
          profit: '$4756386.76'
        },
        {
          year: 2015,
          income: '$3245084864.87',
          profit: '$3904152.19'
        },
        {
          year: 2016,
          income: '$4588460690.32',
          profit: '$2209607.51'
        },
        {
          year: 2017,
          income: '$7753842813.66',
          profit: '$4113279.00'
        },
        {
          year: 2018,
          income: '$7383739755.06',
          profit: '$1587611.75'
        }
      ]
    },
    {
      id: 3,
      company_name: 'Yodoo',
      status: 'Pending Approval',
      company_phone_number: '939-738-0798',
      company_address: '4 Harper Court',
      main_contact_name: 'Malchy Tomenson',
      main_contact_email: 'amuggleston2@yellowbook.com',
      main_contact_phone: '946-187-3633',
      secondary_contact_name: 'Aguste Muggleston',
      secondary_contact_email: 'amuggleston2@ycombinator.com',
      secondary_contact_phone: '697-182-4690',
      performance: [
        {
          year: 2011,
          income: '$5787464821.62',
          profit: '$3150282.68'
        },
        {
          year: 2012,
          income: '$1316866468.10',
          profit: '$3007251.57'
        },
        {
          year: 2013,
          income: '$7849579324.09',
          profit: '$1942.43'
        },
        {
          year: 2014,
          income: '$268756643.78',
          profit: '$4648508.75'
        },
        {
          year: 2015,
          income: '$2606291179.28',
          profit: '$2207034.85'
        },
        {
          year: 2016,
          income: '$5410576590.05',
          profit: '$3467397.46'
        },
        {
          year: 2017,
          income: '$2690958155.25',
          profit: '$-272753.69'
        },
        {
          year: 2018,
          income: '$5821170719.50',
          profit: '$1287016.12'
        }
      ]
    },
    {
      id: 4,
      company_name: 'Vimbo',
      status: 'Approved',
      company_phone_number: '902-111-2046',
      company_address: '52498 Annamark Crossing',
      main_contact_name: 'Salomone Ren',
      main_contact_email: 'mmandy3@g.co',
      main_contact_phone: '395-678-6050',
      secondary_contact_name: 'Mervin Mandy',
      secondary_contact_email: 'mmandy3@mac.com',
      secondary_contact_phone: '150-238-9037',
      performance: [
        {
          year: 2011,
          income: '$4686819109.61',
          profit: '$3109918.20'
        },
        {
          year: 2012,
          income: '$2027671709.04',
          profit: '$-351045.92'
        },
        {
          year: 2013,
          income: '$5517033237.16',
          profit: '$2793040.13'
        },
        {
          year: 2014,
          income: '$4992474014.62',
          profit: '$2081416.87'
        },
        {
          year: 2015,
          income: '$7925469269.78',
          profit: '$3937207.96'
        },
        {
          year: 2016,
          income: '$7620530452.59',
          profit: '$676940.92'
        },
        {
          year: 2017,
          income: '$7269092651.90',
          profit: '$4728134.70'
        },
        {
          year: 2018,
          income: '$223936050.70',
          profit: '$3666127.56'
        }
      ]
    },
    {
      id: 5,
      company_name: 'Fivechat',
      status: 'Declined',
      company_phone_number: '488-583-4600',
      company_address: '0208 Westend Lane',
      main_contact_name: 'Cymbre Shute',
      main_contact_email: 'ljablonski4@topsy.com',
      main_contact_phone: '418-436-6559',
      secondary_contact_name: 'Latrina Jablonski',
      secondary_contact_email: 'ljablonski4@jugem.jp',
      secondary_contact_phone: '200-920-5552',
      performance: [
        {
          year: 2011,
          income: '$5889224385.32',
          profit: '$2306009.59'
        },
        {
          year: 2012,
          income: '$4997190312.62',
          profit: '$4103195.91'
        },
        {
          year: 2013,
          income: '$1649873986.91',
          profit: '$184972.42'
        },
        {
          year: 2014,
          income: '$7919219043.93',
          profit: '$1115235.63'
        },
        {
          year: 2015,
          income: '$9197300850.67',
          profit: '$-354311.03'
        },
        {
          year: 2016,
          income: '$7091261057.37',
          profit: '$3639938.59'
        },
        {
          year: 2017,
          income: '$1482293862.64',
          profit: '$1196447.58'
        },
        {
          year: 2018,
          income: '$7232659528.45',
          profit: '$927726.10'
        }
      ]
    },
    {
      id: 6,
      company_name: 'Rhynyx',
      status: 'Declined',
      company_phone_number: '466-318-7778',
      company_address: '371 Shasta Point',
      main_contact_name: 'Gwenni Ferrarini',
      main_contact_email: 'nchainey5@unc.edu',
      main_contact_phone: '893-678-9385',
      secondary_contact_name: 'Nanni Chainey',
      secondary_contact_email: 'nchainey5@github.com',
      secondary_contact_phone: '429-314-1240',
      performance: [
        {
          year: 2011,
          income: '$3582248982.25',
          profit: '$140197.72'
        },
        {
          year: 2012,
          income: '$2337400672.00',
          profit: '$4983281.92'
        },
        {
          year: 2013,
          income: '$9314461119.76',
          profit: '$2930960.61'
        },
        {
          year: 2014,
          income: '$506300441.41',
          profit: '$3586430.25'
        },
        {
          year: 2015,
          income: '$7117389418.55',
          profit: '$4106510.63'
        },
        {
          year: 2016,
          income: '$1531547814.91',
          profit: '$4311453.65'
        },
        {
          year: 2017,
          income: '$5511614670.73',
          profit: '$917395.10'
        },
        {
          year: 2018,
          income: '$8297987626.28',
          profit: '$4119139.10'
        }
      ]
    },
    {
      id: 7,
      company_name: 'Mynte',
      status: 'Approved',
      company_phone_number: '989-733-7745',
      company_address: '7701 Butternut Drive',
      main_contact_name: 'Willabella Benettelli',
      main_contact_email: 'jpallent6@hatena.ne.jp',
      main_contact_phone: '558-666-5413',
      secondary_contact_name: 'Junina Pallent',
      secondary_contact_email: 'jpallent6@google.co.jp',
      secondary_contact_phone: '940-477-2441',
      performance: [
        {
          year: 2011,
          income: '$5130400355.77',
          profit: '$-36948.63'
        },
        {
          year: 2012,
          income: '$7230957323.42',
          profit: '$2823761.02'
        },
        {
          year: 2013,
          income: '$5938841626.00',
          profit: '$3994662.23'
        },
        {
          year: 2014,
          income: '$8582749780.20',
          profit: '$-300511.38'
        },
        {
          year: 2015,
          income: '$4382730300.24',
          profit: '$4038714.23'
        },
        {
          year: 2016,
          income: '$4564475560.32',
          profit: '$1967014.30'
        },
        {
          year: 2017,
          income: '$6106721383.44',
          profit: '$-192713.77'
        },
        {
          year: 2018,
          income: '$9291111602.17',
          profit: '$3035056.12'
        }
      ]
    },
    {
      id: 8,
      company_name: 'Zava',
      status: 'Declined',
      company_phone_number: '905-629-5190',
      company_address: '0 Bashford Pass',
      main_contact_name: 'Durante Dulinty',
      main_contact_email: 'wjimmison7@berkeley.edu',
      main_contact_phone: '913-354-5729',
      secondary_contact_name: 'Wittie Jimmison',
      secondary_contact_email: 'wjimmison7@vkontakte.ru',
      secondary_contact_phone: '294-574-6285',
      performance: [
        {
          year: 2011,
          income: '$271435656.97',
          profit: '$3887527.95'
        },
        {
          year: 2012,
          income: '$9296919981.54',
          profit: '$1956335.29'
        },
        {
          year: 2013,
          income: '$5329442365.78',
          profit: '$2368057.19'
        },
        {
          year: 2014,
          income: '$5928007117.15',
          profit: '$667132.29'
        },
        {
          year: 2015,
          income: '$9370966273.81',
          profit: '$2693934.77'
        },
        {
          year: 2016,
          income: '$9850689059.50',
          profit: '$2383322.34'
        },
        {
          year: 2017,
          income: '$3829873404.41',
          profit: '$667029.73'
        },
        {
          year: 2018,
          income: '$5934598749.86',
          profit: '$718702.87'
        }
      ]
    },
    {
      id: 9,
      company_name: 'Blognation',
      status: 'Researching',
      company_phone_number: '109-820-8537',
      company_address: '96 Monument Point',
      main_contact_name: 'Vail Brightey',
      main_contact_email: 'kwelland8@cisco.com',
      main_contact_phone: '181-144-6938',
      secondary_contact_name: 'Kippar Welland',
      secondary_contact_email: 'kwelland8@japanpost.jp',
      secondary_contact_phone: '980-115-5718',
      performance: [
        {
          year: 2011,
          income: '$3763019517.91',
          profit: '$2591820.55'
        },
        {
          year: 2012,
          income: '$9165455964.72',
          profit: '$1042337.63'
        },
        {
          year: 2013,
          income: '$900901163.13',
          profit: '$3518306.57'
        },
        {
          year: 2014,
          income: '$7546539805.23',
          profit: '$346907.60'
        },
        {
          year: 2015,
          income: '$5117254097.53',
          profit: '$2875988.74'
        },
        {
          year: 2016,
          income: '$5236082619.37',
          profit: '$-383820.60'
        },
        {
          year: 2017,
          income: '$7338242450.15',
          profit: '$-587280.11'
        },
        {
          year: 2018,
          income: '$9753451155.69',
          profit: '$4154219.74'
        }
      ]
    },
    {
      id: 10,
      company_name: 'Wordtune',
      status: 'Approved',
      company_phone_number: '675-540-4718',
      company_address: '8386 Melody Junction',
      main_contact_name: 'Pearla Scarse',
      main_contact_email: 'cpote9@sun.com',
      main_contact_phone: '501-214-1050',
      secondary_contact_name: 'Currie Pote',
      secondary_contact_email: 'cpote9@nytimes.com',
      secondary_contact_phone: '220-838-6355',
      performance: [
        {
          year: 2011,
          income: '$3435921634.93',
          profit: '$914321.06'
        },
        {
          year: 2012,
          income: '$1176098440.32',
          profit: '$672803.52'
        },
        {
          year: 2013,
          income: '$2711378998.78',
          profit: '$2667381.28'
        },
        {
          year: 2014,
          income: '$2623740140.24',
          profit: '$1428803.73'
        },
        {
          year: 2015,
          income: '$4546586976.85',
          profit: '$1757263.08'
        },
        {
          year: 2016,
          income: '$7447349471.13',
          profit: '$4819068.82'
        },
        {
          year: 2017,
          income: '$5337453499.42',
          profit: '$-614353.02'
        },
        {
          year: 2018,
          income: '$8664767834.21',
          profit: '$714687.66'
        }
      ]
    },
    {
      id: 11,
      company_name: 'Jabberstorm',
      status: 'Researching',
      company_phone_number: '780-708-5815',
      company_address: '1 Basil Hill',
      main_contact_name: 'Heidi Willmer',
      main_contact_email: 'tllopa@privacy.gov.au',
      main_contact_phone: '788-549-9345',
      secondary_contact_name: 'Teodoor Llop',
      secondary_contact_email: 'tllopa@un.org',
      secondary_contact_phone: '805-435-8564',
      performance: [
        {
          year: 2011,
          income: '$9172837350.37',
          profit: '$4963600.90'
        },
        {
          year: 2012,
          income: '$1413578996.55',
          profit: '$1401304.66'
        },
        {
          year: 2013,
          income: '$8086117005.58',
          profit: '$316876.77'
        },
        {
          year: 2014,
          income: '$1564888759.16',
          profit: '$2126209.39'
        },
        {
          year: 2015,
          income: '$6476420737.57',
          profit: '$2981571.38'
        },
        {
          year: 2016,
          income: '$2093435641.75',
          profit: '$2496576.96'
        },
        {
          year: 2017,
          income: '$8108682594.44',
          profit: '$-76857.28'
        },
        {
          year: 2018,
          income: '$4895578586.48',
          profit: '$1107583.21'
        }
      ]
    },
    {
      id: 12,
      company_name: 'Layo',
      status: 'Researching',
      company_phone_number: '969-486-5098',
      company_address: '9 Waxwing Court',
      main_contact_name: 'Nikki Tarquini',
      main_contact_email: 'ncallisb@squidoo.com',
      main_contact_phone: '623-993-6787',
      secondary_contact_name: 'Nikoletta Callis',
      secondary_contact_email: 'ncallisb@1688.com',
      secondary_contact_phone: '750-807-0992',
      performance: [
        {
          year: 2011,
          income: '$2822251163.05',
          profit: '$1875114.29'
        },
        {
          year: 2012,
          income: '$9632824789.63',
          profit: '$1960769.56'
        },
        {
          year: 2013,
          income: '$5998546924.71',
          profit: '$3139063.94'
        },
        {
          year: 2014,
          income: '$4629260216.17',
          profit: '$1594914.87'
        },
        {
          year: 2015,
          income: '$7853769858.72',
          profit: '$3795079.31'
        },
        {
          year: 2016,
          income: '$3160777255.85',
          profit: '$1440617.97'
        },
        {
          year: 2017,
          income: '$5802304530.28',
          profit: '$2760337.34'
        },
        {
          year: 2018,
          income: '$9302586995.00',
          profit: '$3608676.65'
        }
      ]
    },
    {
      id: 13,
      company_name: 'Quinu',
      status: 'Approved',
      company_phone_number: '332-314-4831',
      company_address: '4 Sutherland Hill',
      main_contact_name: 'Tiphanie Hutchence',
      main_contact_email: 'jloughmanc@whitehouse.gov',
      main_contact_phone: '826-381-0325',
      secondary_contact_name: 'Jessi Loughman',
      secondary_contact_email: 'jloughmanc@wiley.com',
      secondary_contact_phone: '492-550-2054',
      performance: [
        {
          year: 2011,
          income: '$3358185893.28',
          profit: '$2681440.02'
        },
        {
          year: 2012,
          income: '$8062626653.11',
          profit: '$-112058.83'
        },
        {
          year: 2013,
          income: '$7546774390.50',
          profit: '$3855344.51'
        },
        {
          year: 2014,
          income: '$5950741101.64',
          profit: '$-239322.64'
        },
        {
          year: 2015,
          income: '$367811098.42',
          profit: '$4232823.21'
        },
        {
          year: 2016,
          income: '$3424442685.70',
          profit: '$4031451.23'
        },
        {
          year: 2017,
          income: '$257957450.12',
          profit: '$4721855.42'
        },
        {
          year: 2018,
          income: '$1780252494.79',
          profit: '$2459115.98'
        }
      ]
    },
    {
      id: 14,
      company_name: 'Tagopia',
      status: 'Approved',
      company_phone_number: '885-147-2674',
      company_address: '66540 Pepper Wood Trail',
      main_contact_name: 'Hy Kleinholz',
      main_contact_email: 'memanuellid@washington.edu',
      main_contact_phone: '306-765-0547',
      secondary_contact_name: 'Mychal Emanuelli',
      secondary_contact_email: 'memanuellid@typepad.com',
      secondary_contact_phone: '193-520-4192',
      performance: [
        {
          year: 2011,
          income: '$4920176516.31',
          profit: '$3002711.09'
        },
        {
          year: 2012,
          income: '$5419757367.27',
          profit: '$3718630.79'
        },
        {
          year: 2013,
          income: '$4077040064.60',
          profit: '$247760.37'
        },
        {
          year: 2014,
          income: '$7588065690.48',
          profit: '$1091732.44'
        },
        {
          year: 2015,
          income: '$5231247873.77',
          profit: '$3630719.99'
        },
        {
          year: 2016,
          income: '$6889068498.32',
          profit: '$1852044.13'
        },
        {
          year: 2017,
          income: '$4093679458.90',
          profit: '$1020703.58'
        },
        {
          year: 2018,
          income: '$311099418.86',
          profit: '$-782860.04'
        }
      ]
    },
    {
      id: 15,
      company_name: 'JumpXS',
      status: 'Pending Approval',
      company_phone_number: '426-184-9401',
      company_address: '50 Kennedy Circle',
      main_contact_name: 'Fancy De Filippis',
      main_contact_email: 'iibbetsone@creativecommons.org',
      main_contact_phone: '684-998-9802',
      secondary_contact_name: 'Iseabal Ibbetson',
      secondary_contact_email: 'iibbetsone@github.io',
      secondary_contact_phone: '397-190-1062',
      performance: [
        {
          year: 2011,
          income: '$9431932347.76',
          profit: '$3666901.12'
        },
        {
          year: 2012,
          income: '$4801753748.97',
          profit: '$24497.17'
        },
        {
          year: 2013,
          income: '$289886976.43',
          profit: '$3116939.45'
        },
        {
          year: 2014,
          income: '$1804439513.35',
          profit: '$910796.49'
        },
        {
          year: 2015,
          income: '$775195999.22',
          profit: '$2962378.94'
        },
        {
          year: 2016,
          income: '$5107877763.07',
          profit: '$4481316.12'
        },
        {
          year: 2017,
          income: '$5222280560.27',
          profit: '$3943144.62'
        },
        {
          year: 2018,
          income: '$3590137430.80',
          profit: '$-615280.43'
        }
      ]
    },
    {
      id: 16,
      company_name: 'Vinte',
      status: 'Declined',
      company_phone_number: '430-617-4899',
      company_address: '13676 High Crossing Junction',
      main_contact_name: 'Marlyn Roebottom',
      main_contact_email: 'dfranssenif@loc.gov',
      main_contact_phone: '780-322-8271',
      secondary_contact_name: 'Debra Fransseni',
      secondary_contact_email: 'dfranssenif@stanford.edu',
      secondary_contact_phone: '812-801-5616',
      performance: [
        {
          year: 2011,
          income: '$9497275425.46',
          profit: '$2342036.39'
        },
        {
          year: 2012,
          income: '$2039843789.70',
          profit: '$1348592.14'
        },
        {
          year: 2013,
          income: '$7967877468.04',
          profit: '$1578003.26'
        },
        {
          year: 2014,
          income: '$8286533268.55',
          profit: '$-724303.69'
        },
        {
          year: 2015,
          income: '$8667976556.18',
          profit: '$3507841.78'
        },
        {
          year: 2016,
          income: '$432863180.52',
          profit: '$-423645.67'
        },
        {
          year: 2017,
          income: '$1766570529.45',
          profit: '$507526.83'
        },
        {
          year: 2018,
          income: '$4348873654.48',
          profit: '$2510776.77'
        }
      ]
    },
    {
      id: 17,
      company_name: 'Vinder',
      status: 'Approved',
      company_phone_number: '697-643-0155',
      company_address: '9 Charing Cross Center',
      main_contact_name: 'Mela Sliney',
      main_contact_email: 'sancliffg@state.tx.us',
      main_contact_phone: '465-301-1140',
      secondary_contact_name: 'Stephine Ancliff',
      secondary_contact_email: 'sancliffg@desdev.cn',
      secondary_contact_phone: '457-715-2914',
      performance: [
        {
          year: 2011,
          income: '$6008134252.96',
          profit: '$1759469.89'
        },
        {
          year: 2012,
          income: '$511339577.81',
          profit: '$4686433.31'
        },
        {
          year: 2013,
          income: '$4322456031.91',
          profit: '$3003590.95'
        },
        {
          year: 2014,
          income: '$6293714839.81',
          profit: '$187637.90'
        },
        {
          year: 2015,
          income: '$8689180583.63',
          profit: '$2185592.88'
        },
        {
          year: 2016,
          income: '$6753652383.27',
          profit: '$-341572.42'
        },
        {
          year: 2017,
          income: '$7190690024.04',
          profit: '$1505471.53'
        },
        {
          year: 2018,
          income: '$8408169519.96',
          profit: '$4891439.24'
        }
      ]
    },
    {
      id: 18,
      company_name: 'Jabbertype',
      status: 'Approved',
      company_phone_number: '728-886-2424',
      company_address: '69715 Del Sol Terrace',
      main_contact_name: 'Jaquelyn Boate',
      main_contact_email: 'pfitzjohnh@canalblog.com',
      main_contact_phone: '255-319-1363',
      secondary_contact_name: 'Phoebe Fitzjohn',
      secondary_contact_email: 'pfitzjohnh@rediff.com',
      secondary_contact_phone: '140-731-3215',
      performance: [
        {
          year: 2011,
          income: '$1467815829.37',
          profit: '$-700125.33'
        },
        {
          year: 2012,
          income: '$6081921353.04',
          profit: '$938207.31'
        },
        {
          year: 2013,
          income: '$6695733621.97',
          profit: '$548094.16'
        },
        {
          year: 2014,
          income: '$1059975352.17',
          profit: '$4987325.46'
        },
        {
          year: 2015,
          income: '$7629496169.42',
          profit: '$791994.33'
        },
        {
          year: 2016,
          income: '$4089396952.75',
          profit: '$3577137.42'
        },
        {
          year: 2017,
          income: '$3201260507.34',
          profit: '$176983.55'
        },
        {
          year: 2018,
          income: '$4431626109.67',
          profit: '$3971642.57'
        }
      ]
    },
    {
      id: 19,
      company_name: 'Zava',
      status: 'Approved',
      company_phone_number: '290-647-3366',
      company_address: '17992 Commercial Hill',
      main_contact_name: 'Alecia Challenger',
      main_contact_email: 'ldedericki@woothemes.com',
      main_contact_phone: '586-141-3821',
      secondary_contact_name: 'Loretta Dederick',
      secondary_contact_email: 'ldedericki@uiuc.edu',
      secondary_contact_phone: '461-398-9562',
      performance: [
        {
          year: 2011,
          income: '$2107886245.91',
          profit: '$2213559.42'
        },
        {
          year: 2012,
          income: '$4712309737.38',
          profit: '$2007294.34'
        },
        {
          year: 2013,
          income: '$8911569575.70',
          profit: '$1465927.23'
        },
        {
          year: 2014,
          income: '$5057138770.88',
          profit: '$4465144.60'
        },
        {
          year: 2015,
          income: '$5469223984.33',
          profit: '$4281873.94'
        },
        {
          year: 2016,
          income: '$2948415547.70',
          profit: '$1898970.47'
        },
        {
          year: 2017,
          income: '$6672302100.51',
          profit: '$1970955.88'
        },
        {
          year: 2018,
          income: '$6749622652.39',
          profit: '$-579416.22'
        }
      ]
    },
    {
      id: 20,
      company_name: 'Avavee',
      status: 'Declined',
      company_phone_number: '665-252-7824',
      company_address: '1513 Kenwood Junction',
      main_contact_name: 'Glendon Woofinden',
      main_contact_email: 'kstoneyj@miibeian.gov.cn',
      main_contact_phone: '701-657-2522',
      secondary_contact_name: 'Kelsey Stoney',
      secondary_contact_email: 'kstoneyj@ted.com',
      secondary_contact_phone: '162-922-2472',
      performance: [
        {
          year: 2011,
          income: '$7331768856.15',
          profit: '$2388829.44'
        },
        {
          year: 2012,
          income: '$4038406358.70',
          profit: '$660822.28'
        },
        {
          year: 2013,
          income: '$804734116.93',
          profit: '$1927879.50'
        },
        {
          year: 2014,
          income: '$9102534793.99',
          profit: '$2215615.71'
        },
        {
          year: 2015,
          income: '$8462857521.03',
          profit: '$1177757.51'
        },
        {
          year: 2016,
          income: '$8362187920.60',
          profit: '$4296292.19'
        },
        {
          year: 2017,
          income: '$831778164.68',
          profit: '$2065417.40'
        },
        {
          year: 2018,
          income: '$2511883085.92',
          profit: '$2089493.94'
        }
      ]
    },
    {
      id: 21,
      company_name: 'Demivee',
      status: 'Declined',
      company_phone_number: '264-137-4230',
      company_address: '696 Independence Place',
      main_contact_name: 'Giffard Levinge',
      main_contact_email: 'cjillittk@nsw.gov.au',
      main_contact_phone: '978-896-0634',
      secondary_contact_name: 'Cyrus Jillitt',
      secondary_contact_email: 'cjillittk@zdnet.com',
      secondary_contact_phone: '972-965-3509',
      performance: [
        {
          year: 2011,
          income: '$4196415463.27',
          profit: '$3236679.73'
        },
        {
          year: 2012,
          income: '$2403491543.28',
          profit: '$-253370.94'
        },
        {
          year: 2013,
          income: '$6468145371.21',
          profit: '$-650537.27'
        },
        {
          year: 2014,
          income: '$3397390724.89',
          profit: '$1562354.60'
        },
        {
          year: 2015,
          income: '$2335910188.88',
          profit: '$1497278.09'
        },
        {
          year: 2016,
          income: '$6965025024.11',
          profit: '$-511775.81'
        },
        {
          year: 2017,
          income: '$225197652.14',
          profit: '$322472.39'
        },
        {
          year: 2018,
          income: '$3152786093.07',
          profit: '$-975758.41'
        }
      ]
    },
    {
      id: 22,
      company_name: 'Izio',
      status: 'Declined',
      company_phone_number: '337-751-8923',
      company_address: '6 Kings Street',
      main_contact_name: 'Annemarie Bainbridge',
      main_contact_email: 'aashworthl@angelfire.com',
      main_contact_phone: '378-419-2773',
      secondary_contact_name: 'Avril Ashworth',
      secondary_contact_email: 'aashworthl@cloudflare.com',
      secondary_contact_phone: '210-150-3388',
      performance: [
        {
          year: 2011,
          income: '$331258157.61',
          profit: '$-601406.38'
        },
        {
          year: 2012,
          income: '$3187458640.94',
          profit: '$1848637.39'
        },
        {
          year: 2013,
          income: '$6585879524.50',
          profit: '$3452952.85'
        },
        {
          year: 2014,
          income: '$4117999235.05',
          profit: '$1459978.34'
        },
        {
          year: 2015,
          income: '$7488696784.19',
          profit: '$3716412.28'
        },
        {
          year: 2016,
          income: '$8881458879.17',
          profit: '$1196022.46'
        },
        {
          year: 2017,
          income: '$4703430871.23',
          profit: '$-499996.15'
        },
        {
          year: 2018,
          income: '$1502294729.92',
          profit: '$2071241.25'
        }
      ]
    },
    {
      id: 23,
      company_name: 'Skiba',
      status: 'Researching',
      company_phone_number: '436-327-9377',
      company_address: '1492 Bunting Alley',
      main_contact_name: 'Devonne Drinkall',
      main_contact_email: 'afergussonm@friendfeed.com',
      main_contact_phone: '979-191-0578',
      secondary_contact_name: 'Abbe Fergusson',
      secondary_contact_email: 'afergussonm@wsj.com',
      secondary_contact_phone: '361-598-8420',
      performance: [
        {
          year: 2011,
          income: '$3342746207.02',
          profit: '$627742.61'
        },
        {
          year: 2012,
          income: '$998713914.82',
          profit: '$3797406.40'
        },
        {
          year: 2013,
          income: '$5064375296.28',
          profit: '$2963868.05'
        },
        {
          year: 2014,
          income: '$5682699749.48',
          profit: '$-163695.24'
        },
        {
          year: 2015,
          income: '$5486038393.29',
          profit: '$227893.12'
        },
        {
          year: 2016,
          income: '$4028261370.43',
          profit: '$2078404.42'
        },
        {
          year: 2017,
          income: '$4683266630.72',
          profit: '$-558404.41'
        },
        {
          year: 2018,
          income: '$7074538120.34',
          profit: '$2689964.37'
        }
      ]
    },
    {
      id: 24,
      company_name: 'Yata',
      status: 'Approved',
      company_phone_number: '110-783-4682',
      company_address: '3361 Kensington Pass',
      main_contact_name: 'Valentina Guisot',
      main_contact_email: 'lwhildn@amazon.de',
      main_contact_phone: '503-580-7649',
      secondary_contact_name: 'Lenna Whild',
      secondary_contact_email: 'lwhildn@reverbnation.com',
      secondary_contact_phone: '651-525-6452',
      performance: [
        {
          year: 2011,
          income: '$6267016780.49',
          profit: '$3161803.99'
        },
        {
          year: 2012,
          income: '$5966442548.33',
          profit: '$360472.61'
        },
        {
          year: 2013,
          income: '$889633419.68',
          profit: '$1147695.79'
        },
        {
          year: 2014,
          income: '$4858977393.11',
          profit: '$1709153.38'
        },
        {
          year: 2015,
          income: '$4752084840.81',
          profit: '$2633709.42'
        },
        {
          year: 2016,
          income: '$1323670099.46',
          profit: '$2405330.43'
        },
        {
          year: 2017,
          income: '$3099305963.76',
          profit: '$3930433.80'
        },
        {
          year: 2018,
          income: '$8510883763.64',
          profit: '$4537446.02'
        }
      ]
    },
    {
      id: 25,
      company_name: 'Katz',
      status: 'Declined',
      company_phone_number: '334-732-5239',
      company_address: '685 Dryden Road',
      main_contact_name: "Geoffry O'Garmen",
      main_contact_email: 'epleasanceo@berkeley.edu',
      main_contact_phone: '369-283-7284',
      secondary_contact_name: 'Ephraim Pleasance',
      secondary_contact_email: 'epleasanceo@cloudflare.com',
      secondary_contact_phone: '592-175-4530',
      performance: [
        {
          year: 2011,
          income: '$4542099827.54',
          profit: '$2953327.14'
        },
        {
          year: 2012,
          income: '$3603772097.74',
          profit: '$2200884.97'
        },
        {
          year: 2013,
          income: '$3143527639.05',
          profit: '$-356855.79'
        },
        {
          year: 2014,
          income: '$2853626502.57',
          profit: '$-391728.63'
        },
        {
          year: 2015,
          income: '$8769931706.81',
          profit: '$-993247.90'
        },
        {
          year: 2016,
          income: '$2852742302.43',
          profit: '$3438915.28'
        },
        {
          year: 2017,
          income: '$6927913891.25',
          profit: '$1962291.38'
        },
        {
          year: 2018,
          income: '$1307297891.48',
          profit: '$3550438.60'
        }
      ]
    }
  ];
}
