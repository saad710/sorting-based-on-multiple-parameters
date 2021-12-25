import logo from './logo.svg'
import './App.css'

const data = [
  {
    Status: null,
    'Parent_Id.Sales_Order_Number': '1520',
    Ready_for_Release: true,
    Parent_Id: {
      id: '1160565000033206001',
    },
    'Parent_Id.Name': 'Boosted CRM Test - PHP Developer',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 150,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 1,
    Revenue: 300,
    id: '1160565000033204035',
    Week: '2021-06-08',
    Notes: null,
  },
  {
    Status: null,
    'Parent_Id.Sales_Order_Number': '1520',
    Ready_for_Release: true,
    Parent_Id: {
      id: '1160565000033206001',
    },
    'Parent_Id.Name': 'Boosted CRM Test - PHP Developer',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 150,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 1,
    Revenue: 150,
    id: '1160565000033204037',
    Week: '2021-06-01',
    Notes: null,
  },
  {
    Status: 'Invoiced',
    'Parent_Id.Sales_Order_Number': '1520',
    Ready_for_Release: true,
    Parent_Id: {
      id: '1160565000033390001',
    },
    'Parent_Id.Name': 'Boosted CRM Test - PHP Developer',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 150,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 12,
    Revenue: 2100,
    id: '1160565000033864003',
    Week: '2021-07-21',
    Notes: 'testttt',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1669',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035998001',
    },
    'Parent_Id.Name':
      'Medtronic: Senior Quality Engineer - Chemistry (Fridley, MN)',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036001001',
    Week: '2021-12-06',
    Notes: '1st week of project',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1669',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035998001',
    },
    'Parent_Id.Name':
      'Medtronic: Senior Quality Engineer - Chemistry (Fridley, MN)',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036001005',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1665',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036030001',
    },
    'Parent_Id.Name':
      'Medtronic: Business Analytics Manager – Diabetes FP&A (Northridge, CA)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036033026',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1667',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035979001',
    },
    'Parent_Id.Name':
      'Medtronic: Scientific Communications Global Program Manager - PVH',
    'Parent_Id.Owner.last_name': 'McPherson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Christy',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036033069',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1666',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035964001',
    },
    'Parent_Id.Name':
      'Medtronic: Commercial Offer Development Global Capability Leader',
    'Parent_Id.Owner.last_name': 'Larson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Haley',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036033116',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1666',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035964001',
    },
    'Parent_Id.Name':
      'Medtronic: Commercial Offer Development Global Capability Leader',
    'Parent_Id.Owner.last_name': 'Larson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Haley',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036033118',
    Week: '2021-12-06',
    Notes: '1st week of project',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1674',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036122001',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: Maintenance Administrator (Seattle, WA)',
    'Parent_Id.Owner.last_name': 'McPherson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Christy',
    Expected_Hours: 20,
    Revenue: 1360,
    id: '1160565000036141024',
    Week: '2021-12-13',
    Notes: '1st 2 weeks discount',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1674',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036122001',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: Maintenance Administrator (Seattle, WA)',
    'Parent_Id.Owner.last_name': 'McPherson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Christy',
    Expected_Hours: 20,
    Revenue: 1360,
    id: '1160565000036141026',
    Week: '2021-12-06',
    Notes: '1st 2 weeks discount',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1679',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036283002',
    },
    'Parent_Id.Name':
      'Fairway Architectural Railing Solutions: Field Supervisor (NC)',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036293050',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1679',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036283002',
    },
    'Parent_Id.Name':
      'Fairway Architectural Railing Solutions: Field Supervisor (NC)',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036293052',
    Week: '2021-12-06',
    Notes: '1st week of billing',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1682',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036336001',
    },
    'Parent_Id.Name': 'QTS Data Centers: Development Specialist (Ashburn, VA)',
    'Parent_Id.Owner.last_name': 'Larson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Haley',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036362073',
    Week: '2021-12-13',
    Notes: 'Project Start',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1683',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036387001',
    },
    'Parent_Id.Name':
      'Dynatrace: Senior Software Engineer for Licensing Solutions Team',
    'Parent_Id.Owner.last_name': 'DeHart',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Aaron',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036362191',
    Week: '2021-12-13',
    Notes: 'Normal billing process',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1684',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036386002',
    },
    'Parent_Id.Name':
      'Dynatrace: Senior Full Stack Engineer & Team Captain - Dynatrace University Team',
    'Parent_Id.Owner.last_name': 'DeHart',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Aaron',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036362268',
    Week: '2021-12-13',
    Notes: '1st week of project - Normal billing process',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1531',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035668004',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Project Manager',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036362540',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1413',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035670013',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Embedded Software Engineer',
    'Parent_Id.Owner.last_name': 'Curley',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Jill',
    Expected_Hours: 18,
    Revenue: 1530,
    id: '1160565000036362565',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1530',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035687005',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Project Administrator',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036362590',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1675',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036289002',
    },
    'Parent_Id.Name': 'Medtronic: Auditor (Fridley, MN)',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036362781',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1675',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036289002',
    },
    'Parent_Id.Name': 'Medtronic: Auditor (Fridley, MN)',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036362785',
    Week: '2021-12-06',
    Notes: '1st week of project',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1641',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035216001',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (Boulder)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036362902',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1644',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036365010',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (North Haven)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036417119',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1643',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036412002',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (Boston)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036417183',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1533',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036453001',
    },
    'Parent_Id.Name': 'QTS Data Centers: Development Program Manager',
    'Parent_Id.Owner.last_name': 'Curley',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Jill',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036450107',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1680',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036483007',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: World Class Manufacturing Engineer (Quakertown, PA)',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 15,
    Revenue: null,
    id: '1160565000036450442',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1680',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036483007',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: World Class Manufacturing Engineer (Quakertown, PA)',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036450444',
    Week: '2021-12-06',
    Notes: 'Going to stay at 15 hours for life of project',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1652',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036465003',
    },
    'Parent_Id.Name': 'Saint-Gobain: Sr. Project Engineer (Hagerstown, MD)',
    'Parent_Id.Owner.last_name': 'Whitener',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Elizabeth',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036450530',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1435',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036454006',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: Industrial Maintenance Electrician',
    'Parent_Id.Owner.last_name': 'McPherson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Christy',
    Expected_Hours: 16,
    Revenue: 1360,
    id: '1160565000036450585',
    Week: '2021-12-06',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1435',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036454006',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: Industrial Maintenance Electrician',
    'Parent_Id.Owner.last_name': 'McPherson',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Christy',
    Expected_Hours: 16,
    Revenue: 1360,
    id: '1160565000036450615',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1623',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000034901006',
    },
    'Parent_Id.Name':
      'Prince William County Service Authority: Geospatial Data Manager',
    'Parent_Id.Owner.last_name': 'DeHart',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Aaron',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036573247',
    Week: '2021-12-13',
    Notes: 'Working while trying to get 3rd installment',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1620',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000034869001',
    },
    'Parent_Id.Name':
      'Prince William County Service Authority: GIS Administrator',
    'Parent_Id.Owner.last_name': 'DeHart',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Aaron',
    Expected_Hours: 20,
    Revenue: 0,
    id: '1160565000036573276',
    Week: '2021-12-13',
    Notes: 'Working while trying to get 3rd installment',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1624',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000034874001',
    },
    'Parent_Id.Name':
      'Prince William County Service Authority: Information and Analytics Manager',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 0,
    id: '1160565000036573303',
    Week: '2021-12-13',
    Notes: 'Working while trying to get 3rd installment',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1549',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035240002',
    },
    'Parent_Id.Name': 'Bayer: Phone Screen Project - Talent Acquisition',
    'Parent_Id.Owner.last_name': 'Curley',
    'Parent_Id.Billing_Rate': 50,
    'Parent_Id.Owner.first_name': 'Jill',
    Expected_Hours: 49,
    Revenue: 2450,
    id: '1160565000036634001',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1413',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035670013',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Embedded Software Engineer',
    'Parent_Id.Owner.last_name': 'Curley',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Jill',
    Expected_Hours: 18,
    Revenue: 1530,
    id: '1160565000036694214',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1530',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035687005',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Project Administrator',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036694237',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1531',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035668004',
    },
    'Parent_Id.Name': 'FIRST RF Corporation: Project Manager',
    'Parent_Id.Owner.last_name': "O'Brien",
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Mark',
    Expected_Hours: 15,
    Revenue: null,
    id: '1160565000036694260',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1637',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035177001',
    },
    'Parent_Id.Name':
      'Medtronic: Senior Principal Atomic Spectroscopy Analytical Chemist',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694363',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1643',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036412002',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (Boston)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694386',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1641',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035216001',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (Boulder)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036694409',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1644',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036365010',
    },
    'Parent_Id.Name': 'Medtronic: Software Engineers (North Haven)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036694432',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1596',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000034330001',
    },
    'Parent_Id.Name': 'Medtronic: Sr. Chemist LC/MS',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694455',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1533',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036453001',
    },
    'Parent_Id.Name': 'QTS Data Centers: Development Program Manager',
    'Parent_Id.Owner.last_name': 'Curley',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Jill',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694498',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1663',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035729001',
    },
    'Parent_Id.Name':
      'Saint-Gobain North America: World Class Manufacturing Engineer (Claremont, NC)',
    'Parent_Id.Owner.last_name': 'Sumner',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Dala',
    Expected_Hours: 15,
    Revenue: 1275,
    id: '1160565000036694587',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1652',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036465003',
    },
    'Parent_Id.Name': 'Saint-Gobain: Sr. Project Engineer (Hagerstown, MD)',
    'Parent_Id.Owner.last_name': 'Whitener',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Elizabeth',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694610',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1662',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000035649001',
    },
    'Parent_Id.Name': 'Medtronic: Electrical Engineer II (North Haven, CT)',
    'Parent_Id.Owner.last_name': 'Homberg',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Cheryl',
    Expected_Hours: 20,
    Revenue: 1700,
    id: '1160565000036694748',
    Week: '2021-12-13',
    Notes: null,
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1649',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036476005',
    },
    'Parent_Id.Name': 'SA Automotive: Project Engineer',
    'Parent_Id.Owner.last_name': 'Whitener',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Elizabeth',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036764005',
    Week: '2021-12-13',
    Notes:
      'Eli was notified today that they want us to turn this position back on for a few more weeks',
  },
  {
    Status: 'To Be Invoiced',
    'Parent_Id.Sales_Order_Number': '1649',
    Ready_for_Release: false,
    Parent_Id: {
      id: '1160565000036476005',
    },
    'Parent_Id.Name': 'Cameroon',
    'Parent_Id.Owner.last_name': 'Whitener',
    'Parent_Id.Billing_Rate': 85,
    'Parent_Id.Owner.first_name': 'Elizabeth',
    Expected_Hours: 20,
    Revenue: null,
    id: '1160565000036764005',
    Week: '2021-12-13',
    Notes:
      'Eli was notified today that they want us to turn this position back on for a few more weeks',
  },
]

console.log(data)

function App() {
  //     var arr = [{id:1, date:'2020-12-01'}, {id:1, date:'2020-12-15'}, {id:1, date:'2020-12-12'}]

  // function sortByDate(a, b) {
  //     if (a.date < b.date) {
  //         return 1;
  //     }
  //     if (a.date > b.date) {
  //         return -1;
  //     }
  //     return 0;
  // }

  // const sorted = arr.sort(sortByDate);
  // console.log(sorted);

  //first_solution

  // const mainData = data?.sort(function (x, y) {
  //     let a = x?.['Parent_Id.Name'],
  //      b = y?.['Parent_Id.Name'];
  //     return a === b ? 0
  //     : a > b ? 1
  //     : -1;
  // });
  // console.log(mainData);

  // function sortByWeek(x, y) {
  //     let a = x?.['Parent_Id.Name'],
  //     b = y?.['Parent_Id.Name'];
  //     let c = x?.Week,
  //     d = y?.Week;
  //       if(a === b){
  //         if (c < d) {
  //             return -1;
  //         }

  //         if (c > d) {
  //             return 1;
  //         }
  //    }
  //    else{
  //        return 0
  //    }

  // }
  // const sorted = mainData?.sort(sortByWeek);
  // console.log(sorted);

  // const arr = [{"Week":'2020-12-01',"Parent_Id.Name":"Doli"},{"Week":'2020-12-06',"Parent_Id.Name":"Doli"}, {"Week":'2020-12-15',"Parent_Id.Name":"Coli"}, {"Week":'2020-12-12',"Parent_Id.Name":"Alisha"},{"Week":'2020-11-12',"Parent_Id.Name":"Alisha"},{"Week":'2020-11-09',"Parent_Id.Name":"Begum"}]
  const mainData = data?.sort(function (x, y) {
    let a = x?.['Parent_Id.Name'],
      b = y?.['Parent_Id.Name']
    let c = x?.Week,
      d = y?.Week
    if (a === b) {
      if (c < d) {
        return -1
      }
      if (c > d) {
        return 1
      }
    }
    if (a > b) {
      return 1
    }
    return -1
  })
  console.log(mainData)

  return <div className="App"></div>
}

export default App
