import { AxiosRequestConfig } from 'axios';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { Review } from 'types/review';
import { requestBackend } from 'utils/requests';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);
    console.log(formData);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data)
        console.log('SUCESSO AO SALVAR', response);
      })
      .catch((error) => {
        console.log('ERRO AO SALVAR', error);
      });
  };

  return (
    <div className="base-card review-card">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="base-input">
            <input
              {...register('text', {
                required: 'Campo obrigatório',
              })}
              type="text"
              name="text"
              placeholder="Deixe sua avaliação aqui"
            />
            <div className='invalid-feedback d-block'>
              {errors.text?.message}
            </div>
          </div>
          <div className="btn-review">
            <ButtonIcon text="salvar avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
