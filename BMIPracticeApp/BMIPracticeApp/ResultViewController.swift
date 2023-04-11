//
//  ResultViewController.swift
//  BMIPracticeApp
//
//  Created by Malleboina,Meghanaa on 4/11/23.
//

import UIKit

class ResultViewController: UIViewController {

    
    @IBOutlet weak var htOutlet: UILabel!
    
    @IBOutlet weak var wtOutlet: UILabel!
    
    @IBOutlet weak var bmiOutlet: UILabel!
    
    var height1 = ""
    var weight1 = ""
    var BMI1 = ""
    override func viewDidLoad() {
        super.viewDidLoad()

        htOutlet.text! += height1
        wtOutlet.text! += weight1
        bmiOutlet.text! += BMI1
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
