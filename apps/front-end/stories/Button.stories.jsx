// import { text, number } from '@storybook/addon-knobs';
import {Button} from "../components/button/Button";

export default {
  title: 'common/Button',
};

export const defaultButton = () => (
  <Button text="Default Button" onClick={() => {
    return 'clicked'
  }}/>
);
