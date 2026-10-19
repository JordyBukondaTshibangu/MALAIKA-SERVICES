// Leadership team shown on the About page.
// The section stays hidden while this list is empty: the Plaquette only has
// placeholders ("Nom et prénom", "Fonction"…) for now. Add one object per
// person once the client sends the details. `photo` is optional (path under /public).
export type TeamMember = {
  name: string;
  role: string;
  education?: string;
  experience?: string;
  expertise?: string;
  bio?: string;
  photo?: string;
};

export const team: TeamMember[] = [];
