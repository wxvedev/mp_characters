type ICharacter = {
  cid: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  cash: number;
  bank: number;
  job: {
    name: string;
    rank?: string;
  };
};

export default ICharacter;
