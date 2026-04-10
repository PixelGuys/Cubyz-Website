import sys
import os
from PIL import Image

SUPPORTED_EXTENSIONS = (".png", ".jpg", ".jpeg", ".webp")

def resize_image(input_path, scale_percent):
    img = Image.open(input_path)

    new_width = int(img.width * scale_percent / 100)
    new_height = int(img.height * scale_percent / 100)

    resized = img.resize((new_width, new_height), Image.LANCZOS)
    return resized

def process_path(path, scale_percent):
    if os.path.isfile(path):
        if not path.lower().endswith(SUPPORTED_EXTENSIONS):
            print(f"Skipped (not image): {path}")
            return

        img = resize_image(path, scale_percent)
        img.save(path)
        print(f"Resized: {path} -> {scale_percent}%")

    elif os.path.isdir(path):
        for filename in os.listdir(path):
            full_path = os.path.join(path, filename)

            if os.path.isfile(full_path) and full_path.lower().endswith(SUPPORTED_EXTENSIONS):
                img = resize_image(full_path, scale_percent)
                img.save(full_path)
                print(f"Resized: {full_path} -> {scale_percent}%")
    else:
        print("Invalid path")

def main():
    if len(sys.argv) != 3:
        print("Usage: python resize.py <percent> <image_or_folder>")
        return

    try:
        scale_percent = float(sys.argv[1])
    except ValueError:
        print("Percent must be a number")
        return

    path = sys.argv[2]
    process_path(path, scale_percent)

if __name__ == "__main__":
    main()
