import { RouteProps } from 'react-router';

export default interface Route extends RouteProps {
  path: string;
  label: string;
  component: () => JSX.Element;
}
