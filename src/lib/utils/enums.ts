export enum USER_TYPES {
    ADMIN = 1,
    USER = 0
}

// this is for the tax payer types
export enum PersonType {
    individual = 'individual',
    business = 'business',
    aop = 'aop',
    fedral = 'fedral',
    provincial = 'provincial',
    sales = 'sales',
    excise = 'excise',
    custom = 'custom',
    withholding = 'withholding',
    other = 'other'
}

export enum PersonCapacity {
    Advisor = 'Advisor',
    Attorney = 'Attorney',
    Consultant = 'Consultant',
    Agent = 'Agent',
    Dealer = 'Dealer',
    Distributor = 'Distributor',
    Auditor = 'Auditor',
    Member = 'Member',
    Payee = 'Payee',
    Predecessor = 'Predecessor',
    PrincipalOfficer = 'Principal Officer',
    LegalRepresentative = 'Legal Representative',
    Representative = 'Representative'
}
