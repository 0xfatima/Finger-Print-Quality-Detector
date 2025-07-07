import React from 'react'
import FAQ from '../components/FAQ'
import AboutDetails from '../components/AboutDetails'
const page = () => {
  return (
    <div>
        
         <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <AboutDetails heading = {'How it started'} content= {'The journey began with a vision to address the critical need for reliable fingerprint recognition in various applications, from law enforcement to personal security.Recognizing the impact of image quality on system accuracy, we embarked on a mission to develop a solution that could effectively evaluate and enhance fingerprint images. This initiative was driven by a commitment to improving the overall performance and trustworthiness of fingerprint-based identification systems.'} />
                <AboutDetails heading = {'Background'} content= {'The journey began with a vision to address the critical need for reliable fingerprint recognition in various applications, from law enforcement to personal security.Recognizing the impact of image quality on system accuracy, we embarked on a mission to develop a solution that could effectively evaluate and enhance fingerprint images. This initiative was driven by a commitment to improving the overall performance and trustworthiness of fingerprint-based identification systems.'} />
                <AboutDetails heading = {'How it can help'} content= {'Our fingerprint image quality detection tool offers numerous benefits across various sectors. For law enforcement, it ensures the reliability of forensic evidence by verifying the quality of fingerprint images collected at crime scenes. In personal security, it enhances the accuracy of biometric authentication systems used in devices like smartphones and laptops. Additionally, it aids in improving the performance of access control systems, ensuring secure and reliable identification. By providing a robust quality assessment, our tool helps maintain the integrity and effectiveness of fingerprint recognition technologies.'} />

            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"></h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"></h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              
            </p>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">FAQs</h2>
            <div className="flex flex-col p-4 gap-3">
              
              <FAQ question ={'What is fingerprint classNameification'} answer={'  Fingerprint classification is the process of evaluating and categorizing fingerprint images based on their quality. This system uses machine learning models like Convolutional Neural Networks (CNN) and Support Vector Machines (SVM) to determine whether a fingerprint image is of good or bad quality. High-quality classification improves the reliability of biometric authentication and forensic identification systems.'} />
              <FAQ question ={'How accurate is the model?'} answer={'    The CNN model achieved a training accuracy of 95% and a validation accuracy of 93% using image augmentation techniques. The SVM model reached around 77% cross-validation accuracy after hyperparameter tuning with GridSearchCV. These results indicate strong performance in fingerprint image quality detection.'} />
              <FAQ question ={'What happens if there is a misclassNameification?'} answer={'    In the case of a misclassification, a good-quality fingerprint image may be rejected or a poor-quality one may be accepted. While rare, this can impact system performance. However, using both CNN and SVM models together helps reduce such errors, as the models complement each other in prediction.'} />
              <FAQ question ={'How can I improve the quality of my fingerprint images?'} answer={'    To improve fingerprint image quality, ensure clean fingers and sensors, avoid smudges, and apply consistent pressure during capture. Avoid harsh lighting or motion while scanning. Consistent data capture conditions and preprocessing (grayscale conversion, resizing, normalization) also enhance model performance and classification accuracy.'} />

             
    </div>
    </div>
    </div>
</div>
    </div>
    </div>
  )
}

export default page