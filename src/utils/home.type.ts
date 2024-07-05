type Ad = {
    name: string;
    quantity: number;
};

type SubCampaign = {
    name: string;
    status: boolean;
    ads: Ad[];
};

export type CampaignInformation = {
    name: string;
    describe?: string;
};

export type Campaign = {
    information: CampaignInformation;
    subCampaigns: SubCampaign[];
};