
export type Employee = {
  id: number
  name: string
  position: string
  office: string
  age: number
  startDate: string
  salary: string
}

export type TableRecord = {
  id: number
  name: string
  phoneNo: string
  dob: string
  country: string
  accountNo: string
  image: string
  cell: string
  activeClass?: string
}

export type ExpandableRecord = {
  product: string
  courier: string
  variant: string
  now: number
  status: string
  price: string
  Quantity: string
  Amount: string
}

export type NestedRecords = {
  name: string
  phoneNo: string
  dob: string
  country: string
  children?: NestedRecords[]
}

export type ResponsiveTableType = {
  companyName: string
  lastTrade: number
  tradeTime: string
  change: string
  prevClose: number
  open: number
  bid: string
  ask: string
  target: number
}
