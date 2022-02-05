declare type Review = {
  username: string;
  iconUrl: string;
  status: "approve" | "comment" | "request-change" | "pending";
};

declare type PullRequest = {
  number: number;
  title: string;
  branch: string;
  iconUrl: string;
  status: "open" | "closed" | "merged";
  reviews?: Review[];
};

declare type Repository = {
  org: string;
  name: string;
  pullRequests?: PullRequest[];
};
