export interface SelectedItem {
  title: string;
  text: string;
  icon: any;
  link: string;
}

// VCARD TYPE
export interface CreateVcard {
  firstName: string; // Required
  lastName?: string; // Optional
  email: string; // Required
  contact: string; // Required
  title?: string; // Optional
  company?: string; // Optional
  yourJob?: string; // Optional
  address?: string; // Optional
  website?: string; // Optional
  summary?: string; // Optional
  instaUrl?: string; // Optional
  facebookUrl?: string; // Optional
  githubUrl?: string; // Optional
  telegramUrl?: string; // Optional
  twitter?: string; // Optional
  welcomeScreen?: string; // Optional
  directions?: string; // Optional
  background?: string; // Optional
  styling?: string; // Optional
}

export interface UpdateVcard extends CreateVcard {
  id: string; // Required field (non-empty string)
}

export interface FormFieldType  {
  name: string;
  placeholder: string;
  col?: string;
  textArea?: boolean;
  rows?: number;
};