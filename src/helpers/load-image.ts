export const loadImage = (url: string) =>
  new Promise<string>((resolve, reject) => {
    const img = new Image();

    img.addEventListener(
      "load",
      () => {
        resolve(img.src);
      },
      false
    );

    img.addEventListener("error", () => {
      reject();
    });

    img.src = url;
  });
