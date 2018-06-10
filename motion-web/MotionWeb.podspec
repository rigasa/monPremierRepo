
  Pod::Spec.new do |s|
    s.name = 'MotionWeb'
    s.version = '0.0.1'
    s.summary = 'Motion Web Plugin for Ionic Capacitor'
    s.license = 'MIT'
    s.homepage = 'https://github.com/rigasa/monPremierRepo'
    s.author = 'Ri.Ga.Sa'
    s.source = { :git => 'https://github.com/rigasa/monPremierRepo', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '10.0'
    s.dependency 'Capacitor'
  end