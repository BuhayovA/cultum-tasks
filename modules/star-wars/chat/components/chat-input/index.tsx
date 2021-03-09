import React, { useCallback, useEffect, useState } from 'react';
import { ImageWrapper, Wrapper, Input, UploadWrapper, UploadImage } from './view';
import { DropzoneState, useDropzone } from 'react-dropzone';

interface Props {
  endIcon?: string;
  startIcon?: string;
  placeholder?: string;
  inputValue: string;
  endIconOnClick: () => void;
  inputOnChange: (message: string) => void;
  addImage: (images: string[]) => void;
  uploadImages?: string[];
}

const ChatInput: React.FC<Props> = ({
  addImage,
  uploadImages,
  endIcon,
  startIcon,
  inputValue,
  placeholder,
  endIconOnClick,
  inputOnChange
}) => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    if (images.length !== 0) {
      addImage(images);
    }
  }, [images]);

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles.map((file: DropzoneState) => URL.createObjectURL(file)));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <>
      <UploadWrapper>
        {uploadImages && uploadImages.map((image: string, index) => <UploadImage key={index} src={image} />)}
      </UploadWrapper>

      <Wrapper>
        <ImageWrapper>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <img src={startIcon} alt='send' width='50px' height='35px' />
          </div>
        </ImageWrapper>
        <Input
          onKeyDown={(e) => e.key === 'Enter' && endIconOnClick()}
          onChange={(event) => inputOnChange(event.target.value)}
          value={inputValue}
          placeholder={placeholder}
        />

        <ImageWrapper>
          <img onClick={() => endIconOnClick()} src={endIcon} alt='send' width='50px' height='30px' />
        </ImageWrapper>
      </Wrapper>
    </>
  );
};

export default ChatInput;
