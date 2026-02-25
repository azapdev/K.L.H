export type Nums = {
  start: number;
  end: number;
  label: string;
};

export type Service = {
  icon: string;
  title: string;
  content: string;
};

export type cards = {
  title: string;
  text: string;
  data: string;
  label: string;
};
// AuthContext
export type AuthContextType = {
  token: string | null;
  Login: (token: string | null) => void;
  Logout: () => void;
};
