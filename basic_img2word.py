import cv2
import pytesseract


img = cv2.imread("thanks.png")

print(pytesseract.image_to_string(img))