# 🧠 Supervised Learning Models: SVM & CNN

This application uses two **supervised learning** models — a Support Vector Machine (SVM) and a Convolutional Neural Network (CNN) — to evaluate fingerprint image quality.

---

## 🔍 Dataset Details
The dataset includes fingerprint images divided into two folders:

- good quality thumbs

- bad quality thumbs

All images are:

- resized to a fixed shape

- Named using a consistent pattern like:

- Bad quality: 20__M_Right_index_finger_Zcut

- Good quality: 1__M_Left_middle_finger

---

## 📁 Dataset Preprocessing

### 📐 Training Split
- **Training to Validation Ratio**: 80:20
    - 80% training data
    - 20% testing data
 

### 🖼️ Image Preprocessing
- All images were resized to **(100 x 100)** pixels.
- Converted to **grayscale** to reduce input dimensions and focus on pattern recognition.
- **Normalization** was applied to scale pixel values between 0 and 1.

### 🧪 Model-Specific Preprocessing
- **SVM**
  - Input expects **1D vectors**, so each 100x100 grayscale image was flattened to a 10,000-length array.
- **CNN**
  - The input remained in 2D shape (100x100x1).
  - Flattening was skipped to retain spatial hierarchies.
  - Data augmentation was later applied to improve generalization.



---

## ⚙️ SVM Model (Support Vector Machine)

- **Library**: `sklearn.svm.SVC`
- **Tuning**: `GridSearchCV` used for hyperparameter optimization.
- **Hyperparameters searched**:
  - `C`: Regularization parameter
  - `gamma`: Kernel coefficient
  - `kernel`: Linear, RBF, etc.

### 🔍 Best Configuration

- This was the result:
    - best parameters:  {'C': 1, 'gamma': 'scale', 'kernel': 'rbf'}
    - Best cross-val accuracy 77.5%
---



## 🧠 CNN Model (Convolutional Neural Network)

### 📐 Architecture (Simplified)
- 2 Convolutional Layers (Conv2D)
- Activation: ReLU
- MaxPooling layers
- Dense layers
- Final Dense layer with sigmoid activation for classification

### 🧪 Experiments & Results

| Configuration | Accuracy | Validation Accuracy | Notes |
|---------------|----------|---------------------|-------|
| Without Augmentation | 97% | 95% | Risk of overfitting |
| With Augmentation    | 95% | 93% | Better generalization |

### 🧬 Data Augmentation Techniques
- ✅ `RandomRotation`
- ✅ `RandomTranslation`
- ❌ `RandomFlip` (was **avoided** as flipping fingerprints horizontally alters critical biometric features)

> When `RandomFlip` was used, the **validation accuracy dropped to 50%** and the model performance fluctuated, indicating poor learning.

### ⚡ Additional Training Techniques
- **EarlyStopping** callback was used to prevent overfitting.
- **ImageDataGenerator** was later introduced for more robust augmentation pipelines.

---

## 🧪 Evaluation Metrics
- **Accuracy** and **Cross-Validation Accuracy**
- Model selection prioritized **generalization**, not just training accuracy.
- CNN was ultimately preferred for production use due to its higher accuracy and ability to capture spatial features better than SVM.

---

## 💡 Summary

| Model | Accuracy | Cross-Validation Accuracy | Pros | Cons |
|-------|----------|---------------------------|------|------|
| SVM   | ~77%     | 77%                        | Lightweight, interpretable | Needs flattening, limited capacity |
| CNN   | 95–97%   | 93–95%                     | Strong feature extraction, handles spatial patterns | Slightly heavier, needs GPU for training |

---

## 📌 Final Model Deployment
- Both models were hosted using **Gradio Spaces**.
- This application uses `@gradio/client` in a **Next.js API route** to interact with the models and return predictions in real-time.

---

