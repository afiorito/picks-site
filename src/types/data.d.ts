export interface NavLink {
  title: string;
  pathname: string;
}

export interface SiteMetadata {
  author: string;
  description: string;
  image: string;
  title: string;
  twitterUsername: string;
  url: string;
}

export type NodesQuery<Key extends string, Node> = {
  [key in Key]: {
    nodes: Node[];
  };
};

export type NodeQuery<Key extends string, Node> = {
  [key in Key]: Node;
};
