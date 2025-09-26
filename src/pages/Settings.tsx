import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Shield, 
  Bell, 
  Palette,
  Save,
  Key
} from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and security settings</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Settings */}
            <div className="card-feature">
              <div className="flex items-center mb-6">
                <User className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Profile Information</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="mt-2" />
                </div>
              </div>
              
              <div className="mt-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" defaultValue="john@lawfirm.com" className="mt-2" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="mt-2" />
              </div>
              
              <div className="mt-4">
                <Label htmlFor="firm">Law Firm / Organization</Label>
                <Input id="firm" defaultValue="Doe & Associates Law Firm" className="mt-2" />
              </div>
              
              <Button className="mt-6">
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>

            {/* Security Settings */}
            <div className="card-feature">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Security</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" placeholder="Enter current password" className="mt-2" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" placeholder="Enter new password" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm new password" className="mt-2" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <h4 className="font-medium text-foreground">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
                
                <Button variant="outline">
                  <Key className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </div>
            </div>

            {/* Notifications */}
            <div className="card-feature">
              <div className="flex items-center mb-6">
                <Bell className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive email updates about your documents</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Document Signatures</h4>
                    <p className="text-sm text-muted-foreground">Get notified when documents are signed</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Billing Updates</h4>
                    <p className="text-sm text-muted-foreground">Notifications about payments and billing</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Marketing Emails</h4>
                    <p className="text-sm text-muted-foreground">Updates about new features and tips</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Status */}
            <div className="card-feature">
              <h3 className="font-semibold text-foreground mb-4">Account Status</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plan</span>
                  <span className="font-medium text-foreground">Pro</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium text-foreground">Jan 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Storage Used</span>
                  <span className="font-medium text-foreground">2.4 GB</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View Usage Details
              </Button>
            </div>

            {/* Preferences */}
            <div className="card-feature">
              <div className="flex items-center mb-4">
                <Palette className="h-5 w-5 text-primary mr-2" />
                <h3 className="font-semibold text-foreground">Preferences</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-foreground">Dark Mode</h4>
                    <p className="text-xs text-muted-foreground">Toggle dark theme</p>
                  </div>
                  <Switch />
                </div>
                
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <select className="w-full mt-2 p-2 border border-border rounded-lg bg-background">
                    <option>UTC-8 (Pacific)</option>
                    <option>UTC-7 (Mountain)</option>
                    <option>UTC-6 (Central)</option>
                    <option>UTC-5 (Eastern)</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="language">Language</Label>
                  <select className="w-full mt-2 p-2 border border-border rounded-lg bg-background">
                    <option>English (US)</option>
                    <option>English (UK)</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="card-feature border-destructive/20 bg-destructive/5">
              <h3 className="font-semibold text-destructive mb-4">Danger Zone</h3>
              
              <div className="space-y-3">
                <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Export All Data
                </Button>
                <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;