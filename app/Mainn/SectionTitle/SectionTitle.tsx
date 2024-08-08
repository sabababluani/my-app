import Button, { ButtonType, Mode } from '@/app/Components/Button/Button';
import { SectionTitlePropsInterface } from './interface/section-title-props.interface';
import styles from './SectionTitle.module.scss';

const SectionTitle = (props: SectionTitlePropsInterface) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.title}</p>
      <div className={styles.button}>
        <Button mode={Mode.More} type={ButtonType.Text} title="More" />
      </div>
    </div>
  );
};

export default SectionTitle;
