import React, { FC, useRef, HTMLProps, ChangeEvent, useState } from "react";

import { cn } from "helpers/classname";
import { Avatar } from "components/UI";

import "./AvatarInput.scss";

const MIME_TYPES = "image/*";

const TEXT = {
  PICK: "Изменить фото профиля",
};

interface IAvatarInputProps {
  src?: string;
}

const cnAvatarInput = cn("avatar-input");

const readFile = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => {
      reject(reader.error);
      reader.abort();
    };

    reader.readAsDataURL(file);
  });

export const AvatarInput: FC<
  IAvatarInputProps & Omit<HTMLProps<HTMLInputElement>, "type" | "accept">
> = (props) => {
  const { src: initialSrc, onChange, ...restInputProps } = props;
  const [src, setSrc] = useState(initialSrc);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = (): void => {
    const input = inputRef.current;

    if (input) {
      input.click();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = inputRef.current;

    if (input && input.files?.length) {
      readFile(input.files[0]).then(setSrc).catch(console.error);
    }

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Avatar src={src} size="xl" onClick={handleClick} className={cnAvatarInput()}>
      <div className={cnAvatarInput("overlay")}>
        <span className={cnAvatarInput("overlay-text")}>{TEXT.PICK}</span>
      </div>
      <input
        type="file"
        accept={MIME_TYPES}
        onChange={handleChange}
        {...restInputProps}
        ref={inputRef}
        hidden
      />
    </Avatar>
  );
};
