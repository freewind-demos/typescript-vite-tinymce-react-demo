import {FC} from 'react';
import './Hello.pcss';
import {Editor} from '@tinymce/tinymce-react';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <div className={'Hello'}>
        <h1>Hello TinyMCE</h1>
        <Editor />
    </div>;
}
