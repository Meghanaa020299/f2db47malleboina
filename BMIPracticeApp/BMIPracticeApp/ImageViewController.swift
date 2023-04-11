//
//  ImageViewController.swift
//  BMIPracticeApp
//
//  Created by Malleboina,Meghanaa on 4/11/23.
//

import UIKit

class ImageViewController: UIViewController {

    
    @IBOutlet weak var ImageOL: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        ImageOL.frame = CGRect(x: 400, y: 200, width: 150, height: 150)
        
}
    override func viewDidAppear(_ animated: Bool) {
        UIView.animate(withDuration: 1, delay: 0.2) {
          
        }
    }

   

}
